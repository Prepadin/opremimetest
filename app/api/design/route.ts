// import { auth } from "@clerk/nextjs";
// import { NextRequest, NextResponse } from "next/server";
// import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
// import { checkSubscription, increaseSubscription, checkApiSubscription } from "@/lib/subscription";

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = auth();
    
//     // Check if API limit has been reached
//     const freeTrial = await checkApiLimit();
//     const isPro = await checkSubscription();
//     const baubau = await checkApiSubscription();
//     // console.log("API Limit Reached:", apiLimitReached);  // Log for debugging
//     if (!userId) return new NextResponse("Unauthorized.", { status: 401 });
//     // if (apiLimitReached) {
//     //   return NextResponse.json(
//     //     { error: "API limit reached" },
//     //     { status: 403 }
//     //   );
//     // }
//     if (!freeTrial && !isPro)
//         return new NextResponse("Free trial has expired.", { status: 403 });
//     if (!isPro) await increaseApiLimit();
//     if (!freeTrial) await increaseSubscription();
//     // Check if the user has a valid subscription
//     // const isSubscribed = await checkSubscription();
//     // console.log("User Subscription Status:", isSubscribed);  // Log for debugging

//     // if (!isSubscribed) {
//     //   return NextResponse.json(
//     //     { error: "Subscription required" },
//     //     { status: 403 }
//     //   );
//     // }

//     // Increase the API limit if all checks pass
//     //await increaseApiLimit();

//    return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Error in API route:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }


import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription, increaseSubscription, checkApiSubscription } from "@/lib/subscription";

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    // Check if the user has a valid subscription
    const isPro = await checkSubscription();
    
    // If no subscription, check if API free trial limit is still valid
    if (!isPro) {
      const freeTrial = await checkApiLimit();
      if (!freeTrial) {
        return new NextResponse("Free trial has expired.", { status: 403 });
      }

      // Increase API limit for free-tier users
      await increaseApiLimit();
    } else {
      // Check if the user has API subscription limits (if applicable)
      const hasApiSubscription = await checkApiSubscription();
      if (!hasApiSubscription) {
        return new NextResponse("API subscription required.", { status: 403 });
      }

      // Increase usage for paid users
      await increaseSubscription();
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

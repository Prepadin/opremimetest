// import { Settings } from 'lucide-react'
// import Image from "next/image";

// import { Heading } from '@/components/heading'
// import { SubscriptionButton } from '@/components/subscription-button'
// import { checkSubscription } from '@/lib/subscription'
// import { getSubscriptionCount } from "@/lib/subscription";

// const SettingsPage = async () => {
//   const isPro = await checkSubscription()
//   const subscriptionCount = await getSubscriptionCount()
//   return (
//     <>
   
// <section className='mt-5 flex flex-col gap-5 sm:flex-row md:mt-8 md:gap-10'>
//   <div className=" flex flex-col lg:flex-row px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-8">
//   {/* Settings Section */}
//   <div className=' w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8'>
//     <Heading
//       title="Settings"
//       description="Manage account settings."
//       icon={Settings}
//       iconColor="text-gray-700"
//       bgColor="bg-gray-700/10"
//     />

//     <div className="mt-4">
//       <div className="text-muted-foreground text-sm">
//         {`You are currently on a ${isPro ? 'pro' : 'free'} plan.`}
//       </div>
//       <SubscriptionButton isPro={isPro} />
//     </div>
//   </div>

//   {/* Credits Available Section */}
//   <div >
//     <div className='w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8' >
//       <p className="p-14-medium text-3xl font-bold md:p-16-medium">Credits Available</p>
//       <div className="mt-4 flex items-center gap-4">
//         <Image
//           src="/assets/icons/coins.svg"
//           alt="coins"
//           width={50}
//           height={50}
//           className="size-12 md:size-12"
//         />
//         <h2 className="h1-bold text-dark-600 text-3xl font-bold">{subscriptionCount} / 250</h2>
//       </div>
//     </div>
//   </div>
// </div>
// </section>
//   </>
//   )
// }

// export default SettingsPage


import { Settings } from 'lucide-react'
import Image from "next/image";

import { Heading } from '@/components/heading'
import { SubscriptionButton } from '@/components/subscription-button'
import { checkSubscription } from '@/lib/subscription'
import { getSubscriptionCount } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription()
  const subscriptionCount = await getSubscriptionCount()

  return (
    <>
      <section className='mt-2 flex flex-col gap-2 sm:flex-row md:mt-8 md:gap-10'>
        <div className="flex flex-col lg:flex-row px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-8">
          
          {/* Credits Available Section */}
          {isPro && (
            <div>
              <div className='w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8'>
                <p className="p-14-medium text-3xl font-bold md:p-16-medium">Število kreditov</p>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    src="/assets/icons/coins.svg"
                    alt="coins"
                    width={50}
                    height={50}
                    className="size-12 md:size-12"
                  />
                  <h2 className="h1-bold text-dark-600 text-3xl font-bold">{subscriptionCount} / 300</h2>
                </div>
              </div>
            </div>
          )}

          {/* Settings Section */}
          <div className='w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-10'>
            <Heading
              title="Nastavitve"
              description=""
              icon={Settings}
              iconColor="text-gray-700"
              bgColor="bg-gray-700/10"
            />

            <div className="mt-2">
              <div className="text-muted-foreground text-sm mt-4">
                {`Trenutno ste v  ${isPro ? 'pro' : 'free'} verziji.`}
              </div>
              <SubscriptionButton isPro={isPro} />
            </div>
          </div>

         
          
        </div>
      </section>
    </>
  )
}

export default SettingsPage


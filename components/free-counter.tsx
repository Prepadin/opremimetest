'use client'

import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { MAX_FREE_COUNTS } from '@/constants'
import { useProModal } from '@/hooks/use-pro-modal'

type FreeCounterProps = {
  apiLimitCount: number
  isPro: boolean
}

export const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const proModal = useProModal()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || isPro) return null

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Brezplačne Generacije
            </p>
            <Progress
              className="h-3 text-white"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>

          <Button
            variant="premium"
            className="w-full"
            onClick={proModal.onOpen}
          >
            Nadgradi <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}



// import { useEffect, useState } from 'react'
// import { Zap } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'
// import { MAX_FREE_COUNTS as DEFAULT_MAX_FREE_COUNTS } from '@/constants'
// import { useProModal } from '@/hooks/use-pro-modal'

// type FreeCounterProps = {
//   apiLimitCount: number
//   isPro: boolean
// }

// export const FreeCounter = ({
//   apiLimitCount = 0,
//   isPro = false,
// }: FreeCounterProps) => {
//   const proModal = useProModal()
//   const [isMounted, setIsMounted] = useState(false)

//   // Calculate the max count based on user type (pro or free)
//   const MAX_FREE_COUNTS = isPro ? 7 : DEFAULT_MAX_FREE_COUNTS

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   return (
//     <div className="px-3">
//       <Card className="bg-white/10 border-0">
//         <CardContent className="py-6">
//           <div className="text-center text-sm text-white mb-4 space-y-2">
//             <p>
//               {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
//             </p>
//             <Progress
//               className="h-3 text-white"
//               value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
//               indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             />
//           </div>

//           <Button
//             variant="premium"
//             className="w-full"
//             onClick={proModal.onOpen}
//           >
//             Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


// 'use client'

// import { useEffect, useState } from 'react'
// import { Zap } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'
// import { MAX_FREE_COUNTS } from '@/constants'
// import { useProModal } from '@/hooks/use-pro-modal'

// type FreeCounterProps = {
//   apiLimitCount: number
//   isPro: boolean
// }

// export const FreeCounter = ({
//   apiLimitCount = 0,
//   isPro = false,
// }: FreeCounterProps) => {
//   const proModal = useProModal()
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   if (!isMounted || isPro) return null

//   return (
//     <div className="px-3">
//       <Card className="bg-white/10 border-0">
//         <CardContent className="py-6">
//           <div className="text-center text-sm text-white mb-4 space-y-2">
//             <p>
//               {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
//             </p>
//             <Progress
//               className="h-3 text-white"
//               value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
//               indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             />
//           </div>

//           <Button
//             variant="premium"
//             className="w-full"
//             onClick={proModal.onOpen}
//           >
//             Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// 'use client'

// import { useEffect, useState } from 'react'
// import { Zap } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'
// import { MAX_FREE_COUNTS } from '@/constants'
// import { useProModal } from '@/hooks/use-pro-modal'
// import { boolean } from 'zod'

// type FreeCounterProps = {
//   apiLimitCount: number
//   checkApiSubscription: number
//   isPro = boolean
// }

// export const FreeCounter = ({
//   apiLimitCount = 0,
//   isPro = false,
//   checkApiSubscription = 0
// }: FreeCounterProps) => {
//   const proModal = useProModal()

//   return (
//     <div className="px-3">
//       <Card className="bg-white/10 border-0">
//         <CardContent className="py-6">
//           <div className="text-center text-sm text-white mb-4 space-y-2">
//             <p>
//               {apiLimitCount}  {checkApiSubscription} / {MAX_FREE_COUNTS} Free Generations
//             </p>
//             <Progress
//               className="h-3 text-white"
//               value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
//               indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             />
//           </div>

//           <Button
//             variant="premium"
//             className="w-full"
//             onClick={proModal.onOpen}
//           >
//             Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }




// 'use client'

// import { useEffect, useState } from 'react'
// import { Zap } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'
// import { MAX_FREE_COUNTS } from '@/constants'
// import { useProModal } from '@/hooks/use-pro-modal'

// type FreeCounterProps = {
//   apiLimitCount: number
//   isPro: boolean
// }

// export const FreeCounter = ({
//   apiLimitCount = 0,
//   isPro = false,
// }: FreeCounterProps) => {
//   const proModal = useProModal()
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//  // if (!isMounted || isPro) return null

//   return (
//     <div className="px-3">
//       <Card className="bg-white/10 border-0">
//         <CardContent className="py-6">
//           <div className="text-center text-sm text-white mb-4 space-y-2">
//             <p>
//               {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
//             </p>
//             <Progress
//               className="h-3 text-white"
//               value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
//               indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             />
//           </div>

//           <Button
//             variant="premium"
//             className="w-full"
//             onClick={proModal.onOpen}
//           >
//             Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// 'use client'

// import { useEffect, useState } from 'react'
// import { Zap } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'
// import { MAX_FREE_COUNTS, MAX_PRO_COUNTS } from '@/constants'  // Assuming you have a max limit for pro users as well
// import { useProModal } from '@/hooks/use-pro-modal'

// type FreeCounterProps = {
//   apiLimitCount: number
//   checkApiSubscription: boolean // true if the user is pro
// }

// export const FreeCounter = ({
//   apiLimitCount = 0,
//   checkApiSubscription = false,
// }: FreeCounterProps) => {
//   const proModal = useProModal()

//   // Set the limit based on the user's subscription status
//   const maxCounts = checkApiSubscription ? MAX_PRO_COUNTS : MAX_FREE_COUNTS

//   return (
//     <div className="px-3">
//       <Card className="bg-white/10 border-0">
//         <CardContent className="py-6">
//           <div className="text-center text-sm text-white mb-4 space-y-2">
//             {/* Display count for both free and pro users */}
//             <p>
//               {apiLimitCount} / {maxCounts} {checkApiSubscription ? 'Pro' : 'Free'} Generations
//             </p>

//             {/* Progress bar for all users */}
//             <Progress
//               className="h-3 text-white"
//               value={(apiLimitCount / maxCounts) * 100}
//               indicatorColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             />
//           </div>

//           {/* Show upgrade button only for free users */}
//           {!checkApiSubscription && (
//             <Button
//               variant="premium"
//               className="w-full"
//               onClick={proModal.onOpen}
//             >
//               Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
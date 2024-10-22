// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { useForm } from 'react-hook-form'
// import ReactMarkdown from 'react-markdown'
// import { toast } from 'sonner'
// import { Code } from 'lucide-react'
// import type { ChatCompletionRequestMessage } from 'openai'

// import { BotAvatar } from '@/components/bot-avatar'
// import { Empty } from '@/components/empty'
// import { Heading } from '@/components/heading'
// import { Loader } from '@/components/loader'
// import { UserAvatar } from '@/components/user-avatar'
// import { Button } from '@/components/ui/button'
// import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'

// import { useProModal } from '@/hooks/use-pro-modal'
// import { cn } from '@/lib/utils'
// import { codeFormSchema } from '@/schemas'

// const CodePage = () => {
//   const proModal = useProModal()
//   const router = useRouter()
//   const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

//   const form = useForm<z.infer<typeof codeFormSchema>>({
//     resolver: zodResolver(codeFormSchema),
//     defaultValues: { prompt: '' },
//   })

//   const isLoading = form.formState.isSubmitting

//   const onSubmit = async (values: z.infer<typeof codeFormSchema>) => {
//     try {
//       const userMessage: ChatCompletionRequestMessage = {
//         role: 'user',
//         content: values.prompt,
//       }

//       const newMessages = [...messages, userMessage]

//       const response = await axios.post('/api/code', { messages: newMessages })

//       setMessages(current => [...current, userMessage, response.data])
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error) && error?.response?.status === 403)
//         proModal.onOpen()
//       else toast.error('Something went wrong.')

//       console.error(error)
//     } finally {
//       form.reset()
//       router.refresh()
//     }
//   }

//   return (
//     <div>
//       <Heading
//         title="Code Generation"
//         description="Generate code using descriptive text."
//         icon={Code}
//         iconColor="text-green-700"
//         bgColor="bg-green-700/10"
//       />

//       <div className="px-4 lg:px-8">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             autoComplete="off"
//             autoCapitalize="off"
//             className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
//           >
//             <FormField
//               name="prompt"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-10">
//                   <FormControl className="m-0 p-0">
//                     <Input
//                       className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
//                       disabled={isLoading}
//                       aria-disabled={isLoading}
//                       placeholder="Simple toggle button using React hooks."
//                       {...field}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//             <Button
//               className="col-span-12 lg:col-span-2 w-full"
//               disabled={isLoading}
//               aria-disabled={isLoading}
//             >
//               Generate
//             </Button>
//           </form>
//         </Form>

//         <div className="space-y-4 mt-4">
//           {isLoading && (
//             <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
//               <Loader />
//             </div>
//           )}
//           {messages.length === 0 && !isLoading && (
//             <Empty label="No conversation started." />
//           )}
//           <div className="flex flex-col-reverse gap-y-4">
//             {messages.map(message => (
//               <div
//                 key={message.content}
//                 className={cn(
//                   'p-8 w-full flex items-start gap-x-8 rounded-lg',
//                   message.role === 'user'
//                     ? 'bg-white border border-black/10'
//                     : 'bg-muted'
//                 )}
//               >
//                 {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
//                 <p className="text-sm">
//                   <ReactMarkdown
//                     components={{
//                       pre: ({ node, ...props }) => (
//                         <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
//                           <pre {...props} />
//                         </div>
//                       ),
//                       code: ({ node, ...props }) => (
//                         <code
//                           className="bg-black/10 rounded-lg p-1"
//                           {...props}
//                         />
//                       ),
//                     }}
//                     className="text-sm overflow-hidden leading-7"
//                   >
//                     {message.content || ''}
//                   </ReactMarkdown>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CodePage


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Kontaktirajte nas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Stopite v stik</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Elektronski naslov</h3>
              <p className="text-gray-600">info@opremime.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Telefon</h3>
              <p className="text-gray-600">+386-069-403-021</p>
            </div>
          </div>
          {/* <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">123 Business Street, Suite 100</p>
              <p className="text-gray-600">Cityville, State 12345</p>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}
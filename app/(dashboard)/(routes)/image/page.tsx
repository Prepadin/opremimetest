'use client'


import { useState } from "react";
import axios from "axios";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default function ImagePage() {
  const [prompt, setPrompt] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Token for authentication (replace with actual token or fetch it securely)
  const AUTH_TOKEN = "EJNVCNK42QFNIQALCMNOLENFLQ3JNQLJ";  // Replace with the actual token

  // Function to translate the prompt
  async function translatePrompt(inputText: string): Promise<string> {
    if (!inputText) return '';

    const res = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: inputText,
        source: 'sl',  // Assuming Slovenian prompt needs to be translated to English
        target: 'en',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return data.translatedText;  // Assuming your API returns the translated text here
  }

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt || !selectedImage) {
      alert("Please provide both prompt and image");
      return;
    }

    try {
      // Step 1: Translate the prompt
      const translatedPrompt = await translatePrompt(prompt);
      console.log("Translated Prompt:", translatedPrompt);

      // Step 2: Call API route to check API limit and subscription
      const response = await axios.post('/api/design');
      if (response.status !== 200) {
        alert(response.data.error || "Failed to verify checks");
        return;
      }

      const formData = new FormData();
      formData.append("prompt", translatedPrompt);  // Use translated prompt here
      formData.append("image", selectedImage);  // Pass the actual file, not the URL

      // Step 3: Generate the image with the translated prompt
      setLoading(true);
      const imageResponse = await axios.post(
        `https://5c35-46-122-65-110.ngrok-free.app/generate_design/?prompt=${translatedPrompt}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${AUTH_TOKEN}`,  // Add the token to the Authorization header
          },
          responseType: "blob",  // We expect a blob image response
        }
      );

      // Create a temporary URL for the generated image
      const imageUrl = URL.createObjectURL(imageResponse.data);
      setGeneratedImage(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error generating design:", error);
      setLoading(false);
    }
  };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-6">Generator Sobne Opreme</h1>
//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Besedilo za oblikovanje:</label>
//           <input
//             type="text"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Opisi zelje oblikovanja"
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center p-4">
//           <label className="cursor-pointer inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
//             Brskaj
//             <input
//               type="file"
//               onChange={handleImageChange}
//               accept="image/*"
//               className="hidden"
//             />
//           </label>

//           {selectedImage && (
//             <div className="mt-4">
//               <img
//                 src={URL.createObjectURL(selectedImage)} // Display the selected image
//                 alt="Selected"
//                 className=" h-auto rounded-lg shadow-lg"
//               />
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
//         >
//           {loading ? "Generating..." : "Generiraj"}
//         </button>
//       </form>

//       {generatedImage && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vaša Generirana Soba:</h2>
//           <img
//             src={generatedImage}
//             alt="Generated Design"
//             className="w-full h-auto max-w-xl"
//           />
//           <a
//             href={generatedImage}
//             download="generated_image.png"
//             className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Prenesi sliko
//           </a>
//         </div>
//       )}
//     </div>
//   );
return (
     
  <div className="p-5">
    <h1 className="text-3xl font-bold mb-6 ">Generator Sobne Opreme</h1>
    <form onSubmit={handleSubmit} className="mb-6 grid  ">
      <div className="mb-4 ">
        <label className="block text-base font-medium text-gray-700 ">Besedilo za oblikovanje:</label>
       
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Opišite želje oblikovanja"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <p>Primer:</p>
    <p className="block text-sm font-medium text-gray-700 ">Elegantna dnevna soba, ki zajema sodobno estetiko sredi stoletja, v središču ima starinsko mizico iz tikovine, ki jo dopolnjuje klasična sončna ura na steni in udobna preproga pod nogami, ki ustvarja toplo in vabljivo vzdušje. </p>
        
</div>
      {/* <div className="flex flex-col items-center justify-center p-4"> */}
 
      <div className="flex flex-col items-start justify-center p-4">
        <label className="cursor-pointer inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
          Pripnite sliko sobe
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </label>

        {selectedImage && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="max-w-full h-auto rounded-lg shadow-lg"
              style={{ width: "500px", height: "auto" }} // Control size of the selected image
            />
          </div>
        )}
      </div>
      
      <div className="flex flex-col items-start justify-center p-4">
      <button
        type="submit"
        disabled={loading}
        className={` px-6 py-3 bg-blue-600 text-white  rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
      >
        {loading ? "Generiram, prosim počakajte ..." : "Generiraj"}
      </button>
      </div>
    

    {selectedImage && generatedImage && (
      <div className="flex flex-col items-start justify-center p-4">
        {/* Display uploaded image */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-4">Naložena Soba:</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded Design"
            className="w-64 h-auto rounded-lg shadow-md"
            style={{ width: "300px", height: "auto" }} // Define width/height
          />
        </div> */}

        {/* Display generated image */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Vaša Generirana Soba:</h2>
          <img
            src={generatedImage}
            alt="Generated Design"
            className="w-64 h-auto rounded-lg shadow-md"
            style={{ width: "500px", height: "auto" }} // Define width/height
          />
          {/* Download button */}
          <a
            href={generatedImage}
            download="generated_image.png"
            className="mt-6 cursor-pointer inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Prenesi sliko
          </a>
        </div>
        
      </div>
    )}
    </form>
    </div>
  
);

 }

////////////////////////////////////////////////////
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "static.politico.com",
//         },
//         {
//           protocol: "https",
//           hostname: "mediaproxy.salon.com",
//         },
//         {
//           protocol: "https",
//           hostname: "media.cnn.com",
//         },
//         {
//           protocol: "https",
//           hostname: "static.files.bbci.co.uk",
//         },
//         {
//           protocol: "https",
//           hostname: "ichef.bbci.co.uk",
//         },
//         {
//             protocol: "https",
//             hostname: "assets.bwbx.io",
//         },
//         {
//             protocol: "https",
//             hostname:"dims.apnews.com"
//         }
//       ],
//     },
//   };
  
//   export default nextConfig;
  
  
  
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",  
        },
      ],
    },
  };
  
  export default nextConfig;
  
PS C:\Users\thiag\PROJETOS\Personal> npm run build
npm warn cli npm v11.1.0 does not support Node.js v20.15.1. This version of npm supports the following node versions: `^20.17.0 || >=22.9.0`. You can find the latest version at https://nodejs.org/.

> nextn@0.1.0 build
> next build

   ▲ Next.js 15.2.3
   - Environments: .env

   Creating an optimized production build ...
 ✓ Compiled successfully
   Skipping validation of types
   Skipping linting
 ✓ Collecting page data    
 ✓ Generating static pages (9/9)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization

Route (app)                                 Size  First Load JS
┌ ○ /                                    44.7 kB         208 kB
├ ○ /_not-found                            977 B         102 kB
├ ƒ /api/email/send                        141 B         101 kB
├ ƒ /api/submitForm                        141 B         101 kB
├ ○ /projetos                            3.58 kB         164 kB
├ ○ /sitemap.xml                           141 B         101 kB
└ ○ /sobre                               1.44 kB         154 kB
+ First Load JS shared by all             101 kB
  ├ chunks/4bd1b696-b156f7fe0c308c6c.js  53.2 kB
  ├ chunks/684-4499e8370a182488.js       45.3 kB
  └ other shared chunks (total)          2.11 kB


ƒ Middleware                             23.4 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
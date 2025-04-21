import {
  css,
  docker,
  figma,
  git,
  dotnet,
  html,
  javascript,
  mongodb,
  nodejs,
  python,
  Cplus,
  redux,
  tailwind,
  typescript,
  threejs,
  postgress,
  sqlserver,
  Csharp,
  django,
  nextjs,
  reactjs,
  postman,
  github,
  REST,
  https,
  nuget,
  vite,
  grpc,
  graph,
  openapi,
  swag,
  
} from "@/assets";
import { FaPhone, FaWhatsapp, FaTelegram, FaInstagram, FaEnvelope } from 'react-icons/fa';

export  const contactItems = [
  {
    label: 'Personal Number',
    value: '09336565309',
    icon: FaPhone,
    href: 'tel:09336565309',
  },
  {
    label: 'WhatsApp',
    value: '09336565309',
    icon: FaWhatsapp,
    href: 'https://wa.me/989336565309', // add country code
  },
  {
    label: 'Telegram',
    value: '@amir44333',
    icon: FaTelegram,
    href: 'https://t.me/amir44333',
  },
  {
    label: 'Instagram',
    value: 'amir_ekhi_',
    icon: FaInstagram,
    href: 'https://instagram.com/amir_ekhi_',
  },
  {
    label: 'Email',
    value: 'ekhiamir@gmail.com',
    icon: FaEnvelope,
    href: 'mailto:ekhiamir@gmail.com',
  },
];



export const navItems = [
  { name: "About Me", link: "/About" },
  { name: "Projects", link: "/Projects" },
  { name: "Tech & Stack", link: "/Tech" },
  { name: "Contact", link: "ContactMe" },
];
export const PnavItems = [
  { name: " درمورد من", link: "/Pe/About" },
  { name: "پروژه ها", link: "/Pe/Projects" },
  { name: "زبان و تکنولوژی", link: "/Pe/Tech" },
  { name: "تماس با من", link: "/Pe/ContactMe" },
];


export const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "2020 - 2021",
    responsibilities: [
      "HTML , CSS , JS , SASS , TS .",
      "Security , Web Vitals , performance  , Responsiveness , UI UX ,",
      "CCNA , SAAS  , GIt ,  Git HUb ",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "2021 - 2022",
    responsibilities: [
      "python ,django , flask , jinja , SQlserver",
      "API , MVC , minimal Api",
      "learning ML (machin learning ) AI  , data analysis",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "2022 - 2023",
    responsibilities: [
      "Started to learn new things and finally things are coming together",
      "React , Next js  , Vue js , Express , PWA , MongoDb , SEO",
      "making fullstack apllications with full authentication with jwt and authorization , plus practical seo and performance optimizations.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: ".NET",
    date: "2023 - 2024",
    responsibilities: [
      ".NET , ASP.NET , MVC minimal API  , Web API , Postgress , SQLserver , EF , SWagger , OpenApi , .NEt 8 , .Net 9 , DI ",
      "SOLID , DRY , KISS , DDD , YAGNI",
      "clean architecture , service architecture ",
      "Singleton Repository  Retries with exponential backoff  Circuit breaker Publisher-subscriber",
    ],
  },
];

export const PexpCards = [
  
  {
    review: "همکاری با امیر یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق امیر به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، امیر شریک ایده‌آلی برای شماست.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Starting with FrontEnd",
    date: " 2020 - 2021 ",
    responsibilities: [
      " HTML , CSS , JS , SASS , TS ,   یادگیری  ",
      "Security , Web Vitals , performance  , Responsiveness , UI UX ,  ساخت انواع تمپلیت های فرانت اند با دیزاین های مختلف رعایت اصول   ",
      "CCNA , SAAS  , GIt ,  Git HUb یادگیری علوم مرطبت     ",
    ],
  },
  {
    review: "همکاری با امیر یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق امیر به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، امیر شریک ایده‌آلی برای شماست.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "BackEnd Development",
    date: " 2021 - 2022",
    responsibilities: [
      " python ,django , flask , jinja , SQlserver , یادگیری استک ",
      " API , MVC , minimal Api ساخت  ",
      "یادگیری اصول اولیه هوش مصنوعی و یادگیری ماشین و تحلیل داده",
    ],
  },
  {
    review:"همکاری با امیر یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق امیر به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، امیر شریک ایده‌آلی برای شماست.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "FullStack development",
    date: " 2022 - 2023",
    responsibilities: [
      "  . شروع یادگیری تکنولوژی های تازه تر و ادغام انها باهم . یادگیری طراحی سیستم ",
      "یادگیری React , Next js  , Vue js , Express , PWA , MongoDb , SEO ",
      "ساخت اپلیکیشن های مختلف از اول تا اخر با استک های مختلف اپتیمایز شده برای سعو . ساخت (پی دابلیو ای ) سیستم های احراز هویت ( جی دابلیو تی )",
    ],
  },
  {
    review: "همکاری با امیر یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق امیر به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، امیر شریک ایده‌آلی برای شماست.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: ".NET Stack",
    date: " 2023 - 2024 ",
    responsibilities: [
      " .NET , ASP.NET , MVC minimal API  , Web API , Postgress , SQLserver , EF , SWagger , OpenApi , .NEt 8 , .Net 9 , DI  علاقه مند شدن و یادگیری  ",
      "SOLID , DRY , KISS , DDD , YAGNI یادگیری اصول   ",
      " clean architecture , service architecture , یادگیری علوم مرطبت     ",
      "  Singleton Repository  Retries with exponential backoff  Circuit breaker Publisher-subscriber   ",
    ],
  },
];

export const technologies = [



 
  {
    name: "sqlserver",
    icon: sqlserver,
  },
   {
    name: "postgress",
    icon: postgress,
  },



  {
    name: "MongoDB",
    icon: mongodb,
  },
];

export const LanguagesTech = [
  
  
 
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: Csharp,
  },
  {
    name: "Python",
    icon: python,
  },
 
  {
    name: "C++",
    icon: Cplus,
  },
  
];
export const Lib = [
  
    {
    name: "Node JS",
    icon: nodejs,
  }, 
  {
    name: ".Net",
    icon: dotnet,
  },
  
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Django",
    icon: django,
  },
 
 
 
  
];
export const Tool = [
  
    {
    name: "Git",
    icon: git,
  }, 
    {
    name: "postman",
    icon: postman,
  }, 
    {
    name: "github",
    icon: github,
  }, 

 
  
];
export const TWeb = [
  
    {
    name: "Html",
    icon: html,
  }, 
    {
    name: "css",
    icon: css,
  }, 
    {
    name: "js",
    icon: javascript,
  }, 
  {
    name: "React",
    icon: reactjs,
  },

 
  
];


export const TPackages = [
  
    {
    name: "nuget",
    icon: nuget,
  }, 
    {
    name: "docker",
    icon: docker,
  }, 
  
    {
    name: "nodejs",
    icon: nodejs,
  }, 
    {
    name: "vite",
    icon: vite,
  }, 

 
 
  
];
export const TApi = [
  
    {
    name: "grpc",
    icon: grpc,
  }, 
    {
    name: "graph",
    icon: graph,
  }, 
  
    {
    name: "openapi",
    icon: openapi,
  }, 
    {
    name: "swag",
    icon: swag,
  }, 
  {
    name: "REST",
    icon: REST,
  }, 
 
 
  
];




export const PaginationItems = [
 {
  pageNumber: 1,
  pageURl: '/Tech'
 },
 {
  pageNumber: 2,
  pageURl: '/TechTwo'
 },
 {
  pageNumber: 3,
  pageURl: '/TechThree'
 },
 {
  pageNumber: 4,
  pageURl: '/TechFour'
 },
 

]
export const PPaginationItems = [
 {
  pageNumber: 1,
  pageURl: '/Pe/Tech'
 },
 {
  pageNumber: 2,
  pageURl: '/Pe/TechTwo'
 },
 {
  pageNumber: 3,
  pageURl: '/Pe/TechThree'
 },
 {
  pageNumber: 4,
  pageURl: '/Pe/TechFour'
 },
 

]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    
  },

  {
    id: 5,
    title: "Currently building a .Net Microservice with EDA ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    
  },
];


export const PEgridItems = [
  {
    id: 1,
    title: "مشتری مداری الویت من میباشد و درک عمیق از خواسته های مشتری هدف من است  ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    
  },
  {
    id: 2,
    title: "منعطف در ساعات کاری",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    
  },
  {
    id: 3,
    title: " تکنولوژی ها , زبان و فریم ورک های حیطه کاری من ",
    description: "همیشه در تلاش برای پیشرفت",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "مشتاق تکنولوژی های جدید و علاقه مند به ساخت اپلیکیشن",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    
  },

  {
    id: 5,
    title: " مشغولم .net اخیرا روی یه پروژه ",
    description: " برای دنبال کردن پروژه ها میتوانید به منوی پایین سر بزنید   ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    
  },
  {
    id: 6,
    title: "دوست داری یه پروژه جدید باهم شروع کنیم ؟",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];
export const Allprojects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },

];

export const Pprojects = [
  {
    id: 1,
    title: "اتو گالری",
    des: "اتوگالری با قابلیت رزرو ماشین های مورد نظر , سیستم تایید و احراز هویت و داشبورد اختصاصی",
    img: "/autog.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://pizza-one-rose.vercel.app/",
  },
  {
    id: 2,
    title: " سهام هارا بدون اخبار با این اپ دنبال کنید",
    des: " SPA اپلیکیشن با دو استک کاملا متفاوت  با احراز هویت فرانت ریکت ",
    img: "/Stock.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://stockfront-eight.vercel.app/",
  },
  {
    id: 3,
    title: "اپ مدیرت پروژه ",
    des: "اپلیکیشن برای مدیریت , دسته بندی , سپردن وظیفه و راه ارتباطی زنده ی پروژه های مختلف به صورت پیام رسان ",
    img: "/management.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://the-dojo-1e333.firebaseapp.com/",
  },

];
export const AllPprojects = [
  {
    id: 1,
    title: "اتو گالری",
    des: "اتوگالری با قابلیت رزرو ماشین های مورد نظر , سیستم تایید و احراز هویت و داشبورد اختصاصی",
    img: "/autog.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://pizza-one-rose.vercel.app/",
  },
  {
    id: 2,
    title: " سهام هارا بدون اخبار با این اپ دنبال کنید",
    des: " SPA اپلیکیشن با دو استک کاملا متفاوت  با احراز هویت فرانت ریکت ",
    img: "/Stock.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://stockfront-eight.vercel.app/",
  },
  {
    id: 3,
    title: "اپ مدیرت پروژه ",
    des: "اپلیکیشن برای مدیریت , دسته بندی , سپردن وظیفه و راه ارتباطی زنده ی پروژه های مختلف به صورت پیام رسان ",
    img: "/management.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://the-dojo-1e333.firebaseapp.com/",
  },
 
];

export const testimonials = [
  {
    quote:
      "Collaborating with Amir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Amir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Amir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Amir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Amir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
export const Ptestimonials = [
  {
    quote:
      "همکاری با آدریان یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق آدریان به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، آدریان شریک ایده‌آلی برای شماست.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "همکاری با آدریان یک تجربه فوق‌العاده بود. حرفه‌ای‌گری، سرعت عمل و تعهد او به ارائه نتایجی بی‌نظیر در طول پروژه ما کاملاً مشهود بود. اشتیاق آدریان به تمام جنبه‌های توسعه واقعاً چشمگیر است. اگر به دنبال ارتقای وب‌سایت و برند خود هستید، آدریان شریک ایده‌آلی برای شماست.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Developer",
    desc: "Developing Elegantly Designed FrontEnds and Lovely Performed Backends to go with it ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Business engineering",
    desc: "engineering businesses for maximum Prophit",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "SEO",
    desc: "Designing and Engineering apps for the maximum Visibality by Serach Engines",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "System Design",
    desc: "Designing Systems to work like a well oiled Machin , a Clock , if you wish.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const PWorkExperience = [
  {
    id: 1,
    title: "توسعه دهنده فول استک ",
    desc: "توسعه بک اند , فرانت اند با استک های روز دنیا  به بهینه ترین و با کیفیت ترین شکل",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "دیزاین و مهندسی اقتصادی اپلیکیشن ",
    desc: "دیزاین کردن اپلیکیشن برای بهترین بازدهی اقتصادی",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "بهبود اپلیکیشن برای بازدید بیشتر SEO ",
    desc: "بهبود اپلیکیشن های مختلف برای هماهنگ شدن با موتور های جسنو جو  برای بهبود بازدهی و بازدید بیشتر ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/amirekhi'
  },
  {
    id: 2,
    img: "/insta.svg",
    link: 'https://www.instagram.com/amir_ekh_?igsh=YzU3Mnh5MWx3aXRj'
  },
  {
    id: 3,
    img: "/telegram.svg",
    link: 'https://t.me/amir44333'
  },
];

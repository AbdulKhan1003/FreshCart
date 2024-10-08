import { Inter } from "next/font/google";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreshCart",
  deScription: "Generated by Abdul Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/images/favicon/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" href="/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="/assets/libs/feather-webfont/dist/feather-icons.css" />
        <link rel="stylesheet" href="/assets/libs/simplebar/dist/simplebar.min.css" />
        <link href="/assets/libs/slick-carousel/slick/slick.css" rel="stylesheet" />
        <link href="/assets/libs/slick-carousel/slick/slick-theme.css" rel="stylesheet" />
        <link href="/assets/libs/tiny-slider/dist/tiny-slider.css" rel="stylesheet" />

        <Script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/custom.js" />

        <Script src="/assets/js/theme.min.js" strategy="beforeInteractive"  ></Script>

        {/* photo upload */}
        {/* <Script src="/assets/js/vendors/validation.js"></Script>
		<Script src="/assets/libs/dropzone/dist/min/dropzone.min.js"></Script>
		<Script src="/assets/js/vendors/dropzone.js"></Script>
		<Script src="/assets/libs/quill/dist/quill.min.js"></Script>
		<Script src="/assets/js/vendors/editor.js"></Script> */}


        <Script src="/assets/js/vendors/jquery.min.js" ></Script>
        <Script src="/assets/libs/slick-carousel/slick/slick.min.js"></Script>
        <Script src="/assets/js/vendors/slick-slider.js"></Script>
        <Script src="/assets/libs/tiny-slider/dist/min/tiny-slider.js"></Script>
        <Script src="/assets/js/vendors/tns-slider.js"></Script>
        <Script src="/assets/js/vendors/zoom.js"></Script>

        <Script src="/assets/js/vendors/countdown.js"></Script>
        <Script src="/assets/js/vendors/modal.js"></Script>

        {/* dashboard */}
        <Script src="/assets/libs/simplebar/dist/simplebar.min.js"></Script>

        <Script src="/assets/libs/apexcharts/dist/apexcharts.min.js"></Script>
        <Script src="/assets/js/vendors/chart.js"></Script>


      </head>

      <body >
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}

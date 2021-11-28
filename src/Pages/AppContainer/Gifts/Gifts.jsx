import React, { useState } from "react";
import "./gift.scss";

const Gifts = () => {
  const [results, setresults] = useState(data.search_results);
  console.log(results, setresults);

  return (
    <div className="">
      <div className="gift h-screen">
        <div className="flex flex-col lg:p-44 md:p-36 p-16">
          <h1 className="awes text-4xl mt-4 pb-2 lg:text-7xl sm:text-lg md:text-5xl text-white">
            Awesome Gifts
            <br />
            For your Loved Once
          </h1>
          <p className="awes text-blue-400 text-xl pb-3">
            Create Happiness by gifting your loved once.
          </p>
          <button className="font-sans p-2 w-28 mt-2 ml-2 rounded-sm text-lg bg-red-600">
            Buy Gifts
          </button>
        </div>
      </div>

      <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {results.map((data, index) => {
              console.log("Card ", data);
              return (
                <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                  >
                    <div className="relative pb-48 overflow-hidden">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={data.image}
                        alt="data_image"
                      />
                    </div>
                    <div className="p-4">
                      {/* <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        Highlight
                      </span> */}
                      {/* <h2 className="mt-2 mb-2  font-bold">
                        {data.title}
                      </h2> */}
                      <p className="text-sm">{data.title}</p>
                      <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">
                          {data?.price?.value * 75}
                        </span>
                        &nbsp;
                        <span className="text-sm font-semibold">inr</span>
                      </div>
                    </div>
                    <div className="p-4 border-t border-b text-xs text-gray-700">
                      <span className="flex items-center mb-1">
                        <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                        3 Tage
                      </span>
                      <span className="flex items-center">
                        <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                        Ermäßigung mit Karte
                      </span>
                    </div>
                    <div className="p-4 flex items-center text-sm text-gray-600">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-yellow-500"
                      >
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-yellow-500"
                      >
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-yellow-500"
                      >
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-yellow-500"
                      >
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-gray-400"
                      >
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                      </svg>
                      <span className="ml-2">34 Bewertungen</span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;

const data = {
  request_info: {
    success: true,
    credits_used: 1,
    credits_remaining: 99,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-27T05:13:47.964Z",
    processed_at: "2021-11-27T05:13:56.812Z",
    total_time_taken: 8.85,
    amazon_url:
      "https://www.amazon.com/s/?k=memory+cards&ref=nb_sb_noss_2&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.com",
    search_term: "memory cards",
    output: "json",
    exclude_sponsored: "false",
    language: "en_US",
    customer_location: "gb",
  },
  search_results: [
    {
      position: 1,
      title:
        "Gigastone 32GB 5 Pack SD Card UHS-I U1 Class 10 SDHC Memory Card High Speed Full HD Video Canon Nikon Sony Pentax Kodak Olympus Panasonic Digital Camera",
      asin: "B07X9YC983",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81x3A65gXNL._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 1255,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 39.98,
          currency: "USD",
          raw: "$39.98",
          asin: "B07X9YC983",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
        },
      ],
      price: {
        symbol: "$",
        value: 39.98,
        currency: "USD",
        raw: "$39.98",
        asin: "B07X9YC983",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      },
    },
    {
      position: 2,
      title:
        "Amplim TF Memory Card 32GB Micro SD SDHC Card Plus Adapter, Cell Phone, Tablet, Camera, 3DS",
      asin: "B07KY3J4B7",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71qdBaVu82L._AC_UY218_.jpg",
      rating: 4.6,
      ratings_total: 442,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 11.98,
          currency: "USD",
          raw: "$11.98",
          asin: "B07KY3J4B7",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
        },
      ],
      price: {
        symbol: "$",
        value: 11.98,
        currency: "USD",
        raw: "$11.98",
        asin: "B07KY3J4B7",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 4,
      title:
        "SAMSUNG EVO Select Micro SD Memory Card with Adapter, 512GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD for Photos, Videos, Music Storage, MB-ME512HA",
      asin: "B0887CHVFF",
      link: "https://www.amazon.com/SAMSUNG-Select-microSDXC-Adapter-MB-ME512HA/dp/B0887CHVFF/ref=sr_1_4?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-4&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/618Riqqgo3L._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 202370,
    },
    {
      position: 5,
      title:
        "Amplim TF Memory Card 32GB Micro SD SDHC Card Plus Adapter, Cell Phone, Tablet, Camera, 3DS",
      asin: "B07KY3J4B7",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71qdBaVu82L._AC_UL320_.jpg",
      rating: 4.6,
      ratings_total: 442,
      is_carousel: true,
      carousel: {
        title: "Highly rated",
        sub_title: "Based on star rating and number of customer ratings",
        sponsored: true,
        id: "loom-desktop-inline-slot_sptw-highly-rated-na",
        total_items: 4,
      },
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 11.98,
          currency: "USD",
          raw: "$11.98",
          name: "$11.98$11.98",
          asin: "B07KY3J4B7",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
        },
      ],
      price: {
        symbol: "$",
        value: 11.98,
        currency: "USD",
        raw: "$11.98",
        name: "$11.98$11.98",
        asin: "B07KY3J4B7",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      },
    },
    {
      position: 6,
      title:
        "TEAMGROUP GO Card 256GB Micro SDXC UHS-I U3 V30 4K for GoPro & Action Cameras High Speed Flash Memory Card with Adapter for Outdoor, Sports, 4K Shooting TGUSDX256GU303",
      asin: "B0897BBCYP",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_3?ie=UTF8&adId=A02753163OJHSC39PXHBW&url=%2FTEAMGROUP-GO-Card-MicroSDXC-TGUSDX256GU303%2Fdp%2FB0897BBCYP%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB0897BBCYP%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-2-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51Di7rjfdlS._AC_UL320_.jpg",
      rating: 4.7,
      ratings_total: 3200,
      is_carousel: true,
      carousel: {
        title: "Highly rated",
        sub_title: "Based on star rating and number of customer ratings",
        sponsored: true,
        id: "loom-desktop-inline-slot_sptw-highly-rated-na",
        total_items: 4,
      },
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 20.49,
          currency: "USD",
          raw: "$20.49",
          name: "$20.49$20.49 $23.99$23.99",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 23.99,
          currency: "USD",
          raw: "$23.99",
          name: "$20.49$20.49 $23.99$23.99",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 20.49,
        currency: "USD",
        raw: "$20.49",
        name: "$20.49$20.49 $23.99$23.99",
        is_primary: true,
      },
    },
    {
      position: 7,
      title:
        "[Gigastone] 256GB Micro SD Card, Gaming Plus, MicroSDXC Memory Card for Nintendo-Switch, Wyze, GoPro, Dash Cam, Security Camera, 4K Video Recording, UHS-I A1 U3 V30 C10, up to 100MB/s, with Adapter",
      asin: "B07P45BKN9",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_4?ie=UTF8&adId=A09387532H3XL0ZC1A0HR&url=%2FGigastone-256GB-Class10-MicroSD-Nintendo%2Fdp%2FB07P45BKN9%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07P45BKN9%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-3-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71j4q2CiZ6S._AC_UL320_.jpg",
      rating: 4.8,
      ratings_total: 22066,
      is_carousel: true,
      carousel: {
        title: "Highly rated",
        sub_title: "Based on star rating and number of customer ratings",
        sponsored: true,
        id: "loom-desktop-inline-slot_sptw-highly-rated-na",
        total_items: 4,
      },
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 34.98,
          currency: "USD",
          raw: "$34.98",
          name: "$34.98$34.98 $39.98$39.98",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 39.98,
          currency: "USD",
          raw: "$39.98",
          name: "$34.98$34.98 $39.98$39.98",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 34.98,
        currency: "USD",
        raw: "$34.98",
        name: "$34.98$34.98 $39.98$39.98",
        is_primary: true,
      },
    },
    {
      position: 8,
      title:
        "Gigastone 32GB 10-Pack Micro SD Card, Full HD Video, Surveillance Security Cam Action Camera Drone, 90MB/s Micro SDHC UHS-I U1 C10 Class 10",
      asin: "B07RVFZ3F3",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_5?ie=UTF8&adId=A08231873LP6AA25ZLYAO&url=%2FGigastone-10-Pack-Class10-Nintendo-Samsung%2Fdp%2FB07RVFZ3F3%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07RVFZ3F3%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-4-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61Sbq4QfSYL._AC_UL320_.jpg",
      rating: 4.7,
      ratings_total: 1686,
      is_carousel: true,
      carousel: {
        title: "Highly rated",
        sub_title: "Based on star rating and number of customer ratings",
        sponsored: true,
        id: "loom-desktop-inline-slot_sptw-highly-rated-na",
        total_items: 4,
      },
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 39.98,
          currency: "USD",
          raw: "$39.98",
          name: "$39.98$39.98 $42.98$42.98",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 42.98,
          currency: "USD",
          raw: "$42.98",
          name: "$39.98$39.98 $42.98$42.98",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 39.98,
        currency: "USD",
        raw: "$39.98",
        name: "$39.98$39.98 $42.98$42.98",
        is_primary: true,
      },
    },
    {
      position: 9,
      title:
        "SanDisk 400GB Ultra microSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-400G-GN6MA",
      asin: "B08GYG5SVQ",
      link: "https://www.amazon.com/SanDisk-400GB-microSDXC-Memory-Adapter/dp/B08GYG5SVQ/ref=sr_1_5?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-5&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81ZJNPHvCvL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 96832,
      prices: [
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 69.99,
          currency: "USD",
          raw: "$69.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 44.99,
        currency: "USD",
        raw: "$44.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 10,
      title:
        "SanDisk 256GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-256G-GN6MA",
      asin: "B07FCR3316",
      link: "https://www.amazon.com/SanDisk-256GB-Extreme-microSD-Adapter/dp/B07FCR3316/ref=sr_1_6?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-6&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81o+KgHuhxL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 244443,
      prices: [
        {
          symbol: "$",
          value: 37.99,
          currency: "USD",
          raw: "$37.99",
          asin: "B07FCR3316",
          link: "https://www.amazon.com/SanDisk-256GB-Extreme-microSD-Adapter/dp/B07FCR3316/ref=sr_1_6?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-6&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        },
      ],
      price: {
        symbol: "$",
        value: 37.99,
        currency: "USD",
        raw: "$37.99",
        asin: "B07FCR3316",
        link: "https://www.amazon.com/SanDisk-256GB-Extreme-microSD-Adapter/dp/B07FCR3316/ref=sr_1_6?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-6&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      },
    },
    {
      position: 11,
      title:
        "SanDisk 32GB Ultra SDHC UHS-I Memory Card - 120MB/s, C10, U1, Full HD, SD Card - SDSDUN4-032G-GN6IN",
      asin: "B08GYG6T12",
      link: "https://www.amazon.com/SanDisk-Ultra-UHS-I-Memory-SDSDUN4-032G-GN6IN/dp/B08GYG6T12/ref=sr_1_7?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-7&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61PUip5hO-L._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 24853,
      prices: [
        {
          symbol: "$",
          value: 11.86,
          currency: "USD",
          raw: "$11.86",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 14.99,
          currency: "USD",
          raw: "$14.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 11.86,
        currency: "USD",
        raw: "$11.86",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 12,
      title:
        "Amazon Basics - 128GB microSDXC Memory Card with Full Size Adapter, A2, U3, read speed up to 100 MB/s",
      asin: "B08TJRVWV1",
      link: "https://www.amazon.com/Amazon-Basics-microSDXC-Memory-Adapter/dp/B08TJRVWV1/ref=sr_1_8?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-8&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61+XcFyL8RL._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 361,
      prices: [
        {
          symbol: "$",
          value: 17.39,
          currency: "USD",
          raw: "$17.39",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 19.99,
          currency: "USD",
          raw: "$19.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 17.39,
        currency: "USD",
        raw: "$17.39",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 13,
      title:
        "SanDisk 128GB Extreme SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXV5-128G-GNCIN",
      asin: "B07H48412Q",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXV5-128G-GNCIN/dp/B07H48412Q/ref=sr_1_9?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-9&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81edSZTyyDL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 42345,
      prices: [
        {
          symbol: "$",
          value: 19.99,
          currency: "USD",
          raw: "$19.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 23.49,
          currency: "USD",
          raw: "$23.49",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 19.99,
        currency: "USD",
        raw: "$19.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 14,
      title:
        "Lexar Professional 2000x 128GB SDXC UHS-II Card, Up To 300MB/s Read, for DSLR, Cinema-Quality Video Cameras (LSD2000128G-BNNNU)",
      asin: "B08GGFCZPW",
      link: "https://www.amazon.com/Lexar-Professional-2000x-UHS-II-LSD2000128G-BNNNU/dp/B08GGFCZPW/ref=sr_1_10?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-10&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71sgIlw0w3L._AC_UY218_.jpg",
      rating: 4.5,
      ratings_total: 694,
    },
    {
      position: 15,
      title:
        "Gigastone 128GB 2-Pack SD Card UHS-I U1 Class 10 SDXC Memory Card High Speed Full HD Video Canon Nikon Sony Pentax Kodak Olympus Panasonic Digital Camera",
      asin: "B07XD1WCQP",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A087100635S09X5UMV3GG&url=%2FGigastone-2-Pack-Olympus-Panasonic-Digital%2Fdp%2FB07XD1WCQP%2Fref%3Dsr_1_11_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-11-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61d9HgYmJSL._AC_UY218_.jpg",
      rating: 4.6,
      ratings_total: 616,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 38.98,
          currency: "USD",
          raw: "$38.98",
          asin: "B07XD1WCQP",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A087100635S09X5UMV3GG&url=%2FGigastone-2-Pack-Olympus-Panasonic-Digital%2Fdp%2FB07XD1WCQP%2Fref%3Dsr_1_11_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-11-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
        },
      ],
      price: {
        symbol: "$",
        value: 38.98,
        currency: "USD",
        raw: "$38.98",
        asin: "B07XD1WCQP",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A087100635S09X5UMV3GG&url=%2FGigastone-2-Pack-Olympus-Panasonic-Digital%2Fdp%2FB07XD1WCQP%2Fref%3Dsr_1_11_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-11-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
      },
    },
    {
      position: 16,
      title:
        "MKING Digital SD UHS-II 1024GB Memory Card V60 –Up to 130MB/s 1TB Write Speed and 250 MB/s Read Speed | for Professional Vloggers, Filmmakers, Photographers & Content Curators (1024GB-V60)",
      asin: "B09LLXN2X4",
      link: "https://www.amazon.com/Professional-Vloggers-Filmmakers-Photographers-1024GB-V60/dp/B09LLXN2X4/ref=sr_1_12?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-12&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      availability: {
        raw: "Only 9 left in stock - order soon.",
      },
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81RouRMtrcL._AC_UY218_.jpg",
      prices: [
        {
          symbol: "$",
          value: 29.99,
          currency: "USD",
          raw: "$29.99",
          asin: "B09LLXN2X4",
          link: "https://www.amazon.com/Professional-Vloggers-Filmmakers-Photographers-1024GB-V60/dp/B09LLXN2X4/ref=sr_1_12?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-12&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        },
      ],
      price: {
        symbol: "$",
        value: 29.99,
        currency: "USD",
        raw: "$29.99",
        asin: "B09LLXN2X4",
        link: "https://www.amazon.com/Professional-Vloggers-Filmmakers-Photographers-1024GB-V60/dp/B09LLXN2X4/ref=sr_1_12?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-12&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      },
    },
    {
      position: 17,
      title:
        "Lexar PLAY 1TB microSDXC UHS-I-Card, Up To 150MB/s Read, Compatible-with Nintendo-Switch, Portable Gaming Devices, Smartphones and Tablets (LMSPLAY001T-BNNNU)",
      asin: "B08T8LL7G8",
      link: "https://www.amazon.com/Lexar-Compatible-Nintendo-Switch-Smartphones-LMSPLAY001T-BNNNU/dp/B08T8LL7G8/ref=sr_1_13?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-13&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71e0Ggv+xDL._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 305,
    },
    {
      position: 18,
      title:
        "Lexar Professional 1667x 128GB SDXC UHS-II Card, Up To 250MB/s Read, for Professional Photographer, Videographer, Enthusiast (LSD128CBNA1667)",
      asin: "B07NLY7N7L",
      link: "https://www.amazon.com/Lexar-Professional-1667x-UHS-II-LSD128CBNA1667/dp/B07NLY7N7L/ref=sr_1_14?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-14&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/618JS8-mUjL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 7388,
    },
    {
      position: 19,
      title:
        "SAMSUNG Pro Plus Micro SD Memory Card + Adapter, 256GB microSDXC, Up to 160MB/s UHS-I, U3, A2, V30Full HD & 4K UHD, Expanded Storage for Phone, Gaming, Tablet, MB-MD256KA/AM",
      asin: "B09B1J3BK2",
      link: "https://www.amazon.com/SAMSUNG-microSDXC-Expanded-MB-MD256KA-AM/dp/B09B1J3BK2/ref=sr_1_15?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-15&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71TTHH-WyQL._AC_UY218_.jpg",
      rating: 4.6,
      ratings_total: 63,
      prices: [
        {
          symbol: "$",
          value: 39.99,
          currency: "USD",
          raw: "$39.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 54.99,
          currency: "USD",
          raw: "$54.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 39.99,
        currency: "USD",
        raw: "$39.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 20,
      title: "Sony CEA-G160T 160GB CFexpress Type A Memory Card (CEAG160T)",
      asin: "B08DRQ6KLL",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07868943SBYCKAKWFCNK&url=%2FSony-CEA-G160T-CFexpress-Memory-CEAG160T%2Fdp%2FB08DRQ6KLL%2Fref%3Dsr_1_16_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-16-spons%26psc%3D1%26smid%3DAXCB29L39I26U&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
      availability: {
        raw: "Only 3 left in stock - order soon.",
      },
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81GsE+DZqeL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 94,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 398,
          currency: "USD",
          raw: "$398.00",
          asin: "B08DRQ6KLL",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07868943SBYCKAKWFCNK&url=%2FSony-CEA-G160T-CFexpress-Memory-CEAG160T%2Fdp%2FB08DRQ6KLL%2Fref%3Dsr_1_16_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-16-spons%26psc%3D1%26smid%3DAXCB29L39I26U&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
        },
      ],
      price: {
        symbol: "$",
        value: 398,
        currency: "USD",
        raw: "$398.00",
        asin: "B08DRQ6KLL",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07868943SBYCKAKWFCNK&url=%2FSony-CEA-G160T-CFexpress-Memory-CEAG160T%2Fdp%2FB08DRQ6KLL%2Fref%3Dsr_1_16_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-16-spons%26psc%3D1%26smid%3DAXCB29L39I26U&qualifier=1637990034&id=1776662760669470&widgetName=sp_mtf",
      },
    },
    {
      position: 21,
      title:
        "RITZ GEAR VideoPro CFExpress Type B 128GB Card (1550/550 R/W), Pairs with Compatible Nikon, Panasonic & Canon DSLR Cameras. (Some Cameras Need a firmware Update to be Compatible W CFexpress)",
      asin: "B08SMNGYRT",
      link: "https://www.amazon.com/CFExpress-Ritz-Gear-Compatible-Panasonic/dp/B08SMNGYRT/ref=sr_1_17?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-17&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61jx+0cl2rL._AC_UY218_.jpg",
      coupon: {
        badge_text: "Save $50.00",
        text: "with coupon",
      },
      rating: 4,
      ratings_total: 134,
      prices: [
        {
          symbol: "$",
          value: 149.99,
          currency: "USD",
          raw: "$149.99",
          asin: "B08SMNGYRT",
          link: "https://www.amazon.com/CFExpress-Ritz-Gear-Compatible-Panasonic/dp/B08SMNGYRT/ref=sr_1_17?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-17&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        },
      ],
      price: {
        symbol: "$",
        value: 149.99,
        currency: "USD",
        raw: "$149.99",
        asin: "B08SMNGYRT",
        link: "https://www.amazon.com/CFExpress-Ritz-Gear-Compatible-Panasonic/dp/B08SMNGYRT/ref=sr_1_17?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-17&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      },
    },
    {
      position: 22,
      title:
        "SanDisk 128GB Ultra SDXC UHS-I Memory Card - 100MB/s, C10, U1, Full HD, SD Card - SDSDUNR-128G-GN6IN",
      asin: "B07YFGG1SD",
      link: "https://www.amazon.com/SanDisk-128GB-Ultra-UHS-I-Memory/dp/B07YFGG1SD/ref=sr_1_18?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-18&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/619vrnD+NoL._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 68489,
      prices: [
        {
          symbol: "$",
          value: 19.99,
          currency: "USD",
          raw: "$19.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 22.99,
          currency: "USD",
          raw: "$22.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 19.99,
        currency: "USD",
        raw: "$19.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 23,
      title:
        "Micro Sd Card 1024GB with Card Adapter 1TB High Speed Class 10 Memory Card for Smartphone, Tablet, Drone, Camcorders, Videographers, Vloggers and Other SD Devices - Blue",
      asin: "B09M3ZCH2T",
      link: "https://www.amazon.com/Adapter-Smartphone-Camcorders-Videographers-Vloggers/dp/B09M3ZCH2T/ref=sr_1_19?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-19&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      availability: {
        raw: "Only 1 left in stock - order soon.",
      },
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/41vjqXyrE1L._AC_UY218_.jpg",
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          asin: "B09M3ZCH2T",
          link: "https://www.amazon.com/Adapter-Smartphone-Camcorders-Videographers-Vloggers/dp/B09M3ZCH2T/ref=sr_1_19?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-19&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        asin: "B09M3ZCH2T",
        link: "https://www.amazon.com/Adapter-Smartphone-Camcorders-Videographers-Vloggers/dp/B09M3ZCH2T/ref=sr_1_19?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-19&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      },
    },
    {
      position: 24,
      title:
        "SanDisk 128GB Extreme PRO CFexpress Card Type B - SDCFE-128G-GN4NN",
      asin: "B085CNSZMC",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-CFexpress-Card/dp/B085CNSZMC/ref=sr_1_20?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-20&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/719rGDuOZxL._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 963,
      prices: [
        {
          symbol: "$",
          value: 139.99,
          currency: "USD",
          raw: "$139.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 249.99,
          currency: "USD",
          raw: "$249.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 139.99,
        currency: "USD",
        raw: "$139.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 25,
      title:
        "TEAMGROUP GO Card 256GB Micro SDXC UHS-I U3 V30 4K for GoPro & Action Cameras High Speed Flash Memory Card with Adapter for Outdoor, Sports, 4K Shooting TGUSDX256GU303",
      asin: "B0897BBCYP",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A02753163OJHSC39PXHBW&url=%2FTEAMGROUP-GO-Card-MicroSDXC-TGUSDX256GU303%2Fdp%2FB0897BBCYP%2Fref%3Dsr_1_21_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-21-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_btf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51Di7rjfdlS._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 3200,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 20.49,
          currency: "USD",
          raw: "$20.49",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 23.99,
          currency: "USD",
          raw: "$23.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 20.49,
        currency: "USD",
        raw: "$20.49",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 26,
      title:
        "Gigastone 256GB Micro SD Card, Camera Plus, GoPro, Action Camera, Sports Camera, A1 Run App for Smartphone, Nintendo-Switch Compatible, 100MB/s, 4K Video Recording, Micro SDXC UHS-I A1 U3 Class 10",
      asin: "B089PW38QQ",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0888898UBQPIP8B41UF&url=%2FGigastone-Smartphone-Nintendo-Compatible-Recording%2Fdp%2FB089PW38QQ%2Fref%3Dsr_1_22_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-22-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_btf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71HV9gyxH+S._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 21036,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 36.98,
          currency: "USD",
          raw: "$36.98",
          asin: "B089PW38QQ",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0888898UBQPIP8B41UF&url=%2FGigastone-Smartphone-Nintendo-Compatible-Recording%2Fdp%2FB089PW38QQ%2Fref%3Dsr_1_22_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-22-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_btf",
        },
      ],
      price: {
        symbol: "$",
        value: 36.98,
        currency: "USD",
        raw: "$36.98",
        asin: "B089PW38QQ",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0888898UBQPIP8B41UF&url=%2FGigastone-Smartphone-Nintendo-Compatible-Recording%2Fdp%2FB089PW38QQ%2Fref%3Dsr_1_22_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-22-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_btf",
      },
    },
  ],
  related_searches: [
    {
      query: "memory cards for kids",
      link: "https://www.amazon.com/s/?k=memory+cards+for+kids&ref=sugsr_0_2&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
    {
      query: "memory cards for funeral",
      link: "https://www.amazon.com/s/?k=memory+cards+for+funeral&ref=sugsr_3_1&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
    {
      query: "computer input devices",
      link: "https://www.amazon.com/s/?k=computer+input+devices&ref=sugsr_1_2&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
    {
      query: "usb gadgets",
      link: "https://www.amazon.com/s/?k=usb+gadgets&ref=sugsr_4_1&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
    {
      query: "micro sd memory card",
      link: "https://www.amazon.com/s/?k=micro+sd+memory+card&ref=sugsr_2_1&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
    {
      query: "memory card for phone",
      link: "https://www.amazon.com/s/?k=memory+card+for+phone&ref=sugsr_5_1&pd_rd_w=q8u50&pf_rd_p=4fa0e97a-13a4-491b-a127-133a554b4da3&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=80ac1c01-8f2b-4598-bac7-f7842a0c070a&pd_rd_wg=7BYBe&qid=1637990034",
    },
  ],
  related_brands: [
    {
      logo: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/6821261a-3122-499a-b647-740dc8ff0df3._CR0,0,4167,4167_AC_SX139_SY100_QL70_.png",
      image:
        "https://m.media-amazon.com/images/I/71j4q2CiZ6S._AC_SR139,139_QL70_.jpg",
      title: "The Ultimate Gaming EngineShop Gigastone",
      link: "https://aax-us-iad.amazon.com/x/c/QpT67ye8KFNNX4Gj4JP8K2oAAAF9X9BtjAEAAAH2AYurs98/https://www.amazon.com/stores/page/B4C91791-DE47-4C2A-BD4D-1BA0126DF93A/?_encoding=UTF8&store_ref=SB_A0005111B7GCSNJKX4SR&pd_rd_plhdr=t&aaxitk=d791274c07dd60d03daa1f7f6d5b6192&hsa_cr_id=9364576770901&lp_asins=B07P45BKN9%2CB089DBTNRX%2CB07N7D2WBF&lp_query=memory%20cards&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=jgMCp&pf_rd_p=85014337-b4b1-4f3c-85f8-828d3b814280&pd_rd_wg=RcmMt&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=868d3bd1-c65c-489c-aed2-7f7faa7722df",
      store_link:
        "https://www.amazon.com/stores/page/B4C91791-DE47-4C2A-BD4D-1BA0126DF93A",
      store_id: "B4C91791-DE47-4C2A-BD4D-1BA0126DF93A",
      store_name: "Gigastone",
    },
    {
      logo: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/4f60233f-c8cf-4a3d-8f05-cff93c7a3322._CR0,0,2000,1453_AC_SX139_SY100_QL70_.jpg",
      image:
        "https://m.media-amazon.com/images/I/51u15ADAQAL._AC_SR139,139_QL70_.jpg",
      title: "Best Choice of Micro SD CardsShop AEGO",
      link: "https://aax-us-iad.amazon.com/x/c/QvH1tk6BUqgEKLTOmclA5toAAAF9X9BtjAEAAAH2ARPnySo/https://www.amazon.com/stores/page/40BBE85B-1AA5-4C1F-AADD-42599474CEE5/?_encoding=UTF8&store_ref=SB_A04411852SG93G1YEQB5N&pd_rd_plhdr=t&aaxitk=a92fa74f4cb57a9a7713cde0b89298bc&hsa_cr_id=5131608730101&lp_asins=B07DHHDWNG%2CB07DHHD716%2CB07DJ374VB&lp_query=memory%20cards&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=jgMCp&pf_rd_p=85014337-b4b1-4f3c-85f8-828d3b814280&pd_rd_wg=RcmMt&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=868d3bd1-c65c-489c-aed2-7f7faa7722df",
      store_link:
        "https://www.amazon.com/stores/page/40BBE85B-1AA5-4C1F-AADD-42599474CEE5",
      store_id: "40BBE85B-1AA5-4C1F-AADD-42599474CEE5",
      store_name: "AEGO",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/2/ATVPDKIKX0DER/436c3086bab68763b2010ed3c5ed21dd._AC_SX139_SY100_QL70_.jpg",
      title: "Blazing fast UHS II & UHS I memory cardsShop Amplim",
      link: "https://aax-us-iad.amazon.com/x/c/QjU0KvZ-4NyM6bqWwvPbAgIAAAF9X9BtjAEAAAH2AWat6Rk/https://www.amazon.com/stores/page/4C81DC85-D1E8-4BE7-8A24-9EC5FFD72DF1/?_encoding=UTF8&store_ref=SB_A0492880RTRT5BO2JP5Z&pd_rd_plhdr=t&aaxitk=025ae70b162af1a3ec11eda0e1c53f19&hsa_cr_id=5151392450901&lp_asins=B07NRCBYDY&lp_query=memory%20cards&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=jgMCp&pf_rd_p=85014337-b4b1-4f3c-85f8-828d3b814280&pd_rd_wg=RcmMt&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=868d3bd1-c65c-489c-aed2-7f7faa7722df",
      store_link:
        "https://www.amazon.com/stores/page/4C81DC85-D1E8-4BE7-8A24-9EC5FFD72DF1",
      store_id: "4C81DC85-D1E8-4BE7-8A24-9EC5FFD72DF1",
      store_name: "Amplim",
    },
  ],
  pagination: {
    total_results: 2000,
    current_page: 1,
    current_page_link:
      "https://www.amazon.com/s?k=memory+cards&language=en_US&qid=1637990034&ref=sr_pg_1",
    next_page_link:
      "https://www.amazon.com/s?k=memory+cards&language=en_US&qid=1637990034&ref=sr_pg_1&page=2",
    total_pages: 20,
  },
  refinements: {
    departments: [
      {
        name: "Computer Accessories & Peripherals",
        value: "n/172456",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172456&dc&language=en_US&qid=1637990034&rnid=2941120011&ref=sr_nr_n_1",
      },
      {
        name: "Micro SD Memory Cards",
        value: "n/3015433011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172456%2Cn%3A3015433011&dc&language=en_US&qid=1637990034&rnid=2941120011&ref=sr_nr_n_2",
      },
      {
        name: "SecureDigital Memory Cards",
        value: "n/1197396",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172456%2Cn%3A1197396&dc&language=en_US&qid=1637990034&rnid=2941120011&ref=sr_nr_n_3",
      },
      {
        name: "CompactFlash Memory Cards",
        value: "n/1197392",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172456%2Cn%3A1197392&dc&language=en_US&qid=1637990034&rnid=2941120011&ref=sr_nr_n_4",
      },
      {
        name: "Electronics",
        value: "n/172282",
        link: "https://www.amazon.com/s?k=memory+cards&i=electronics&dc&language=en_US&qid=1637990034&ref=sr_nr_i_5",
      },
      {
        name: "Cell Phones & Accessories",
        value: "n/2335752011",
        link: "https://www.amazon.com/s?k=memory+cards&i=mobile&dc&language=en_US&qid=1637990034&ref=sr_nr_i_6",
      },
      {
        name: "Industrial & Scientific",
        value: "n/16310091",
        link: "https://www.amazon.com/s?k=memory+cards&i=industrial&dc&language=en_US&qid=1637990034&ref=sr_nr_i_7",
      },
      {
        name: "Kindle Accessories",
        value: "n/370783011",
        link: "https://www.amazon.com/s?k=memory+cards&i=kindle-accessories&dc&language=en_US&qid=1637990034&ref=sr_nr_i_8",
      },
      {
        name: "Sports & Outdoors",
        value: "n/3375251",
        link: "https://www.amazon.com/s?k=memory+cards&i=sporting&dc&language=en_US&qid=1637990034&ref=sr_nr_i_9",
      },
    ],
    reviews: [
      {
        name: "4 Stars & Up",
        value: "n:172282||p_72/1248879011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_72%3A1248879011&dc&language=en_US&qid=1637990034&rnid=1248877011&ref=sr_nr_p_72_1",
      },
      {
        name: "3 Stars & Up",
        value: "n:172282||p_72/1248880011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_72%3A1248880011&dc&language=en_US&qid=1637990034&rnid=1248877011&ref=sr_nr_p_72_2",
      },
      {
        name: "2 Stars & Up",
        value: "n:172282||p_72/1248881011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_72%3A1248881011&dc&language=en_US&qid=1637990034&rnid=1248877011&ref=sr_nr_p_72_3",
      },
      {
        name: "1 Star & Up",
        value: "n:172282||p_72/1248882011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_72%3A1248882011&dc&language=en_US&qid=1637990034&rnid=1248877011&ref=sr_nr_p_72_4",
      },
    ],
    price: [
      {
        name: "Under $25",
        value: "n:516866||p_36/1253503011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_36%3A1253503011&dc&language=en_US&qid=1637990034&rnid=386442011&ref=sr_nr_p_36_1",
      },
      {
        name: "$25 to $50",
        value: "n:516866||p_36/1253504011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_36%3A1253504011&dc&language=en_US&qid=1637990034&rnid=386442011&ref=sr_nr_p_36_2",
      },
      {
        name: "$50 to $100",
        value: "n:516866||p_36/1253505011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_36%3A1253505011&dc&language=en_US&qid=1637990034&rnid=386442011&ref=sr_nr_p_36_3",
      },
      {
        name: "$100 to $200",
        value: "n:516866||p_36/1253506011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_36%3A1253506011&dc&language=en_US&qid=1637990034&rnid=386442011&ref=sr_nr_p_36_4",
      },
      {
        name: "$200 & Above",
        value: "n:516866||p_36/1253507011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_36%3A1253507011&dc&language=en_US&qid=1637990034&rnid=386442011&ref=sr_nr_p_36_5",
      },
    ],
    brand: [
      {
        name: "SanDisk",
        value: "n:172282||p_89/SanDisk",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ASanDisk&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_1",
      },
      {
        name: "SAMSUNG",
        value: "n:172282||p_89/SAMSUNG",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ASAMSUNG&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_2",
      },
      {
        name: "Lexar",
        value: "n:172282||p_89/Lexar",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ALexar&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_3",
      },
      {
        name: "nuiflash",
        value: "n:172282||p_89/nuiflash",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3Anuiflash&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_4",
      },
      {
        name: "PNY",
        value: "n:172282||p_89/PNY",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3APNY&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_5",
      },
      {
        name: "Kingston",
        value: "n:172282||p_89/Kingston",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3AKingston&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_6",
      },
      {
        name: "Gigastone",
        value: "n:172282||p_89/Gigastone",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3AGigastone&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_7",
      },
      {
        name: "SUPERDUODUORitz GearSonyVerbatimTranscendKEXINVANTRUE",
        value: "n:172282||undefined",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ASUPERDUODUO&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_8",
      },
      {
        name: "SUPERDUODUO",
        value: "n:172282||p_89/SUPERDUODUO",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ASUPERDUODUO&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_8",
      },
      {
        name: "Ritz Gear",
        value: "n:172282||p_89/Ritz Gear",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ARitz+Gear&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_9",
      },
      {
        name: "Sony",
        value: "n:172282||p_89/Sony",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ASony&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_10",
      },
      {
        name: "Verbatim",
        value: "n:172282||p_89/Verbatim",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3AVerbatim&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_11",
      },
      {
        name: "Transcend",
        value: "n:172282||p_89/Transcend",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3ATranscend&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_12",
      },
      {
        name: "KEXIN",
        value: "n:172282||p_89/KEXIN",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3AKEXIN&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_13",
      },
      {
        name: "VANTRUE",
        value: "n:172282||p_89/VANTRUE",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_89%3AVANTRUE&dc&language=en_US&qid=1637990034&rnid=2528832011&ref=sr_nr_p_89_14",
      },
    ],
    high_capacity_memory_cards: [
      {
        name: "8 GB & Under",
        value: "n:516866||p_n_feature_two_browse-bin/6518302011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A6518302011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_1",
      },
      {
        name: "16 GB",
        value: "n:516866||p_n_feature_two_browse-bin/6518303011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A6518303011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_2",
      },
      {
        name: "32 GB",
        value: "n:516866||p_n_feature_two_browse-bin/6518304011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A6518304011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_3",
      },
      {
        name: "64 GB",
        value: "n:516866||p_n_feature_two_browse-bin/6518305011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A6518305011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_4",
      },
      {
        name: "128 GB",
        value: "n:516866||p_n_feature_two_browse-bin/13203834011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A13203834011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_5",
      },
      {
        name: "200 GB & Up",
        value: "n:516866||p_n_feature_two_browse-bin/13203835011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A13203835011&dc&language=en_US&qid=1637990034&rnid=6518301011&ref=sr_nr_p_n_feature_two_browse-bin_6",
      },
    ],
    condition: [
      {
        name: "New",
        value: "n:172282||p_n_condition-type/2224371011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_n_condition-type%3A2224371011&dc&language=en_US&qid=1637990034&rnid=2224369011&ref=sr_nr_p_n_condition-type_1",
      },
      {
        name: "Used",
        value: "n:172282||p_n_condition-type/2224373011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_n_condition-type%3A2224373011&dc&language=en_US&qid=1637990034&rnid=2224369011&ref=sr_nr_p_n_condition-type_2",
      },
    ],
    certification: [
      {
        name: "Energy Star",
        value: "n:172282||p_n_special_merchandising_browse-bin/544495011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_n_special_merchandising_browse-bin%3A544495011&dc&language=en_US&qid=1637990034&rnid=544494011&ref=sr_nr_p_n_special_merchandising_browse-bin_1",
      },
    ],
    new_arrivals: [
      {
        name: "New Arrivals",
        value: "n:172282||p_n_date/1249033011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=n%3A172282%2Cp_n_date%3A1249033011&dc&language=en_US&qid=1637990034&rnid=1249031011&ref=sr_nr_p_n_date_1",
      },
    ],
    from_our_brands: [
      {
        name: "Our Brands",
        value: "p_n_feature_forty-seven_browse-bin/21180942011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=p_n_feature_forty-seven_browse-bin%3A21180942011&dc&language=en_US&qid=1637990034&rnid=21180941011&ref=sr_nr_p_n_feature_forty-seven_browse-bin_1",
      },
    ],
    amazon_global_store: [
      {
        name: "Amazon Global Store",
        value: "p_n_global_store_origin_marketplace/16354393011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=p_n_global_store_origin_marketplace%3A16354393011&dc&language=en_US&qid=1637990034&rnid=16354392011&ref=sr_nr_p_n_global_store_origin_marketplace_1",
      },
    ],
    availability: [
      {
        name: "Include Out of Stock",
        value: "p_n_availability/2661601011",
        link: "https://www.amazon.com/s?k=memory+cards&rh=p_n_availability%3A2661601011&dc&language=en_US&qid=1637990034&rnid=2661599011&ref=sr_nr_p_n_availability_2",
      },
    ],
  },
  shopping_advisors: [
    {
      position: 12,
      title: "Articles related to your search",
      article: {
        title:
          "Best Memory Card\n    \n\n    \n    \n        The best SD memory cards for your camera, and how to choose the right one\n    \n\n    \n    \n        Best memory cards for Amazon Fire Tablet\n    \n\n    \n    \n        The Best SD Cards\n    \n\n    \n    \n        Best microSD Cards for Nintendo Switch",
        body: "Looking for a memory card? Our data storage experts bought and tested the top 8 memory cards available in 2021 and put them through a rigorous side-by-side comparison to find the very best. We measured both read and write speeds for different file types in both computers and cameras. Our recommendations are based on our extensive hands-on testing and can help you find the perfect memory card for your needs and budget.",
        link: "https://www.amazon.com/ospublishing/story/e1285160-c6f6-47fa-96ed-4de251efbdaa/ref=sxin_14?pd_rd_w=rHevD&pf_rd_p=17778e06-59fc-4cb3-8ec7-c44637e0bb1c&pf_rd_r=VYYTN11QFQFPP3SYMPZ2&pd_rd_r=b627b8cc-74c8-4915-afa2-ffce56456fea&pd_rd_wg=PWTqh&qid=1637990034&cv_ct_pg=search&cv_ct_wn=osp-multicontent&ascsubtag=amzn1.osa.e1285160-c6f6-47fa-96ed-4de251efbdaa.ATVPDKIKX0DER.en_US&linkCode=oas&cv_ct_id=amzn1.osa.e1285160-c6f6-47fa-96ed-4de251efbdaa.ATVPDKIKX0DER.en_US&asc_contentid=amzn1.osa.e1285160-c6f6-47fa-96ed-4de251efbdaa.ATVPDKIKX0DER.en_US&cv_ct_we=article-page&tag=tgl0a3-20&asc_contenttype=article&cv_ct_cx=memory+cards",
      },
      recommendations: [
        {
          position: 1,
          body: "While MicroSD cards are becoming more popular in compact cameras and drones, and larger cards are taking on the professional market. The tried-and-true SD card remains vital to most DSLR and mirrorless cameras. The best SD cards offer fast performance while being affordable. But the sheer number of memory cards on the market can make it hard to know which SD card to choose. Luckily, we did some research and found the top SD memory cards within several categories: budget, speed, and more.",
        },
        {
          position: 2,
          body: "Thanks to the included microSD card slot, you can grab one of the best memory cards for the Amazon Fire Tablet quickly to expand the storage. Whether you picked up one of the best Amazon Fire Tablets for yourself or your kids, you've probably noticed that the internal storage doesn't go very far. Unfortunately, you can quickly fill it up with some games, a few apps, and media, which is a bit disappointing. So make sure to pair one of the best Android tablets with the best memory cards and bump up the storage.",
        },
        {
          position: 3,
          body: "After extensive research and testing, we think the 64 GB SanDisk Extreme Pro is the best SD card for use in digital cameras or other devices.",
        },
        {
          position: 4,
          body: "With only 32GB on board, you’re going to need to make the most of the Switch’s expandable storage with a microSD card. Here’s our top picks to keep you gaming strong.",
        },
      ],
    },
  ],
};

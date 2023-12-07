import React, { useState } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
tailwind.config = {
  theme: {
    extend: {
      colors: {
        body: "#111111",
        line: "#1e1e1e",
        item: "#181818",
        card: "#252527",
        brandGreen: "#e8fe4e",
        brandGray: "#737373",
        brandBlue: "#1a2cb8",
        brandOrange: "#cbbca6",
      },
    },
  },
};

const pinned = [
  {
    key: 1,
    title: "Benevolentia paciscor propinquus",
    desc: "Concilium munimentum curis competo sanctifico iaculator",
    date: "12 Jan",
    isSelected: false,
  },
  {
    key: 2,
    title: "Mollis furs sapiens",
    desc: "Andegavense infigo edoceo prohibeo vultuosus aer hactenus glorior informatio",
    date: "9 Mar",
    isSelected: true,
  },
];

const all = [
  {
    key: 1,
    title: "Transmitto pario dignitas",
    desc: "Promoveo lenocinor treverim etiam natio vespillo plaustrum eximius adicio iugis efficio ille",
    date: "21 Aug",
    isSelected: false,
  },
  {
    key: 2,
    title: "Gemblacensis intumesco adipiscor",
    desc: "Nitor articulus rhetor spolium insula hanc dedecus expedio spargo lasesco furor",
    date: "2 Dec",
    isSelected: false,
  },
  {
    key: 3,
    title:
      "Sustineo locupleto prohibeo testimonium epistula quaestio recito fugio defleo comedo pollicitus cedo",
    desc: "Commessatio intus paciscor redigo forte exspecto inflo mores, frux, ex",
    date: "15 Apr",
    isSelected: false,
  },
  {
    key: 4,
    title:
      "Macto parilis macero castellandum patria proinde demitto molestia ficus malum",
    desc: "Adulescentia nutus vestis pevela pertimesco procella berlinmonte quodammodo quartus nutrimens claro",
    date: "20 May",
    isSelected: false,
  },
];

const dataMain = [
  {
    key: 0,
    text: "Infirmus scaphium namucense vilis induco lacus. Piger distulo putus. Insula demo multus laboro cupressus.",
    isUser: true,
  },
  {
    key: 1,
    text: "Infirmus scaphium namucense vilis induco lacus. Piger distulo putus. Insula demo multus laboro cupressus.",
    isUser: false,
  },
  {
    key: 2,
    text: "Saeta prolatio impendeo sentio praevenio magnopere pertorqueo velociter aperte prolatio.",
    isUser: true,
  },
  {
    key: 3,
    text: "Plurimus laetor rogo. Maxime limen immortalis defaeco immerito decorus niveus puchre liberaliter huic. ",
    isUser: false,
    images: [
      { key: 0, url: "https://assets.codepen.io/3685267/gpt-redesign-0.png" },
      { key: 1, url: "https://assets.codepen.io/3685267/gpt-redesign-1.png" },
      { key: 2, url: "https://assets.codepen.io/3685267/gpt-redesign-2.png" },
      { key: 3, url: "https://assets.codepen.io/3685267/gpt-redesign-3.png" },
      { key: 4, url: "https://assets.codepen.io/3685267/gpt-redesign-4.png" },
    ],
  },
  {
    key: 4,
    text: "Quilibet forte spero mundus contages quaestio praebeo onero.",
    isUser: true,
  },
  {
    key: 5,
    text: "Quilibet forte spero mundus contages quaestio praebeo onero.",
    isUser: false,
  },
  {
    key: 6,
    text: "Quilibet forte spero mundus contages quaestio praebeo onero.",
    isUser: true,
  },
  {
    key: 7,
    text: "Sure, here is an example of NFTs",
    isUser: false,
    images: [
      { key: 0, url: "https://assets.codepen.io/3685267/gpt-redesign-5.png" },
      { key: 1, url: "https://assets.codepen.io/3685267/gpt-redesign-6.png" },
      { key: 2, url: "https://assets.codepen.io/3685267/gpt-redesign-7.png" },
      { key: 3, url: "https://assets.codepen.io/3685267/gpt-redesign-8.png" },
      { key: 4, url: "https://assets.codepen.io/3685267/gpt-redesign-9.png" },
    ],
  },
];

const trending = [
  {
    key: 1,
    text: "Web3 platform",
    isSelected: true,
  },
  {
    key: 2,
    text: "Crypto",
    isSelected: false,
  },
  {
    key: 3,
    text: "AI",
    isSelected: false,
  },
  {
    key: 4,
    text: "How to invest in crypto",
    isSelected: false,
  },
  {
    key: 5,
    text: "What NFTs are popular now",
    isSelected: false,
  },
];

function Options({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
}

function Times({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function PencilSquareIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

function PinnedIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M23.7114 6.8735L17.0193 0.181399C16.7777 -0.0604258 16.3854 -0.0604258 16.1438 0.181399L16.1155 0.209755C15.7051 0.619978 15.479 1.16566 15.479 1.7459C15.479 2.11972 15.574 2.47843 15.7505 2.79653L8.7483 8.806C8.2124 8.32706 7.5284 8.06492 6.80392 8.06492C6.02322 8.06492 5.28932 8.36891 4.73745 8.92091L4.69547 8.96288C4.45365 9.20459 4.45365 9.59661 4.69547 9.83831L8.70459 13.8474L4.79998 17.7519C4.72185 17.8323 2.87367 19.7368 1.6586 21.2524C0.501484 22.6953 0.27266 22.9596 0.260773 22.9733C0.0459413 23.2179 0.0578282 23.5869 0.287766 23.818C0.408246 23.939 0.56711 24.0001 0.726469 24.0001C0.871713 24.0001 1.01733 23.9494 1.13446 23.847C1.14474 23.838 1.40303 23.6136 2.85535 22.4491C4.37069 21.2341 6.2752 19.3858 6.36175 19.3014L10.2601 15.4031L14.0545 19.1975C14.1753 19.3185 14.3338 19.3789 14.4922 19.3789C14.6505 19.3789 14.8092 19.3185 14.9299 19.1975L14.9719 19.1556C15.5239 18.6037 15.8278 17.8697 15.8278 17.0891C15.8278 16.3646 15.5656 15.6806 15.0868 15.1447L21.0962 8.14256C21.4143 8.31901 21.7731 8.41398 22.1469 8.41398C22.7272 8.41398 23.2728 8.188 23.683 7.77753L23.7114 7.74918C23.9532 7.50723 23.9532 7.11521 23.7114 6.8735Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ListAllIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}
function TrendingIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="none"
      className={className}
    >
      <path
        d="M5.64171 19.7582L18.063 7.33689L18.0631 11.9911C18.0631 13.328 20.0683 13.3279 20.0683 11.9911L20.065 7.74905L20.0628 4.91725C20.0612 4.36722 19.6157 3.92174 19.0657 3.92011L11.9932 3.91598C11.7206 3.91227 11.458 4.01983 11.2668 4.21427C10.6303 4.85088 11.0932 5.93857 11.9933 5.92133L16.653 5.91583L4.18957 18.3793C3.25789 19.4082 4.74678 20.7507 5.64171 19.7582Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function WarningIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

function ChatHeader() {
  return (
    <div className="fixed top-0 inset-x-0 z-10">
      <div
        className="bg-body border-b border-b-line z-10 bg-opacity-30 backdrop-blur-md"
        style={{ marginLeft: "384px", marginRight: "320px" }}
      >
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between py-2">
          <div className="inline-flex items-center">
            <ChatIcon className="w-6 h-6" />
            <h1 className="ml-2 font-semibold text-xl">Explore NFT Industry</h1>
          </div>
          <div className="inline-flex items-center space-x-3">
            <button
              className="w-9 h-9 grid place-items-center bg-card rounded-md"
              onClick={() => {}}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
            <button
              className="w-9 h-9 grid place-items-center bg-card rounded-md"
              onClick={() => {}}
            >
              <SaveIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

function TrashIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function SaveIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
      />
    </svg>
  );
}

function Chat() {
  return (
    <div className=" " style={{ marginLeft: "384px", marginRight: "320px" }}>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-48">
        {dataMain.map((i) => (
          <ChatItem item={i} key={i.key} />
        ))}
      </div>
    </div>
  );
}

function ChatItem({ item }) {
  return (
    <div className="py-2" key={item.key}>
      <div className="bg-item rounded-md flex p-2">
        <div className="shrink-0 w-12">
          <div className="w-11 h-11 grid place-items-center">
            {item.isUser ? (
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://assets.codepen.io/3685267/gpt-redesign-avatar.png")',
                }}
              ></div>
            ) : (
              <div className="w-9 h-9 grid place-items-center bg-brandGreen rounded-full">
                <GPTLogo className="w-6 h-6 text-blue-900" />
              </div>
            )}
          </div>
        </div>
        <div className=" w-full">
          <div className="px-3 h-10 flex items-center justify-between grow text-brandGray ">
            <div className="text-sm"> 12 Mar </div>
            {item.isUser ? (
              <div className="inline-flex items-center">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <Pencil className="w-5 h-5 " />
                </button>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsUp className="w-5 h-5 " />
                </button>
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsDown className="w-5 h-5 " />
                </button>
              </div>
            )}
          </div>
          <div
            className={`px-3 pb-3 ${
              item.isUser ? "text-white" : "text-brandGray"
            }`}
          >
            {item.text}
          </div>
          {item.images && <ImageSet images={item.images} />}
        </div>
      </div>
    </div>
  );
}

function GPTLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M468.698 210.996C472.892 198.408 475.031 185.229 475.033 171.963C475.032 150.012 469.177 128.457 458.072 109.513C435.757 70.718 394.361 46.766 349.561 46.766C340.735 46.7662 331.933 47.6972 323.303 49.5436C311.695 36.4812 297.446 26.0248 281.497 18.864C265.547 11.7031 248.259 8.00038 230.772 8H229.987L229.692 8.00173C175.43 8.00173 127.31 42.9721 110.629 94.5262C93.3625 98.0583 77.0506 105.234 62.7854 115.572C48.5201 125.91 36.6307 139.173 27.9129 154.472C16.8412 173.529 11.0068 195.169 11 217.202C11.0042 248.167 22.5126 278.028 43.2966 301.004C39.1011 313.591 36.9615 326.771 36.9597 340.037C36.9616 361.988 42.816 383.543 53.9211 402.487C67.127 425.451 87.2943 443.634 111.515 454.411C135.735 465.189 162.757 468.006 188.683 462.455C200.293 475.517 214.543 485.974 230.493 493.135C246.444 500.296 263.733 503.999 281.221 504H282.006L282.325 503.998C336.617 503.998 384.722 469.026 401.402 417.425C418.669 413.892 434.98 406.716 449.246 396.378C463.511 386.039 475.401 372.777 484.12 357.478C495.18 338.438 501.003 316.816 501 294.803C500.996 263.839 489.487 233.978 468.703 211.003L468.698 210.996ZM282.038 471.573H281.909C260.185 471.566 239.151 463.954 222.464 450.061C223.455 449.529 224.434 448.974 225.401 448.399L324.281 391.354C326.748 389.951 328.8 387.921 330.228 385.469C331.655 383.018 332.408 380.233 332.409 377.397V238.072L374.203 262.174C374.422 262.283 374.611 262.445 374.753 262.645C374.895 262.844 374.985 263.076 375.016 263.319V378.621C374.959 429.884 333.368 471.47 282.038 471.573ZM82.0843 386.278C73.9167 372.173 69.6136 356.168 69.6082 339.874C69.6082 334.56 70.0728 329.232 70.9779 323.995C71.713 324.435 72.9959 325.218 73.9166 325.746L172.797 382.791C175.262 384.228 178.065 384.986 180.92 384.985C183.774 384.984 186.577 384.226 189.042 382.788L309.764 313.167V361.374L309.766 361.457C309.766 361.689 309.712 361.918 309.608 362.126C309.504 362.334 309.353 362.514 309.168 362.654L209.209 420.296C195.066 428.427 179.034 432.708 162.715 432.712C146.379 432.71 130.33 428.418 116.179 420.268C102.027 412.117 90.2691 400.394 82.0843 386.273V386.278ZM56.0709 170.68C66.9311 151.84 84.0792 137.414 104.514 129.928C104.514 130.778 104.466 132.284 104.466 133.33V247.422L104.464 247.516C104.464 250.349 105.215 253.131 106.641 255.58C108.066 258.03 110.115 260.058 112.58 261.461L233.302 331.071L191.509 355.173C191.303 355.309 191.066 355.392 190.82 355.414C190.575 355.436 190.327 355.398 190.1 355.301L90.1307 297.61C75.9986 289.434 64.2665 277.691 56.1099 263.559C47.9534 249.427 43.659 233.401 43.6572 217.089C43.6635 200.803 47.9455 184.803 56.0761 170.685L56.0709 170.68ZM399.452 250.489L278.73 180.871L320.524 156.777C320.73 156.641 320.966 156.558 321.212 156.536C321.458 156.513 321.706 156.552 321.933 156.649L421.9 214.291C436.044 222.455 447.789 234.191 455.955 248.322C464.122 262.453 468.423 278.481 468.426 294.796C468.426 333.739 444.096 368.585 407.514 382.034V264.531C407.519 264.488 407.519 264.443 407.519 264.399C407.518 261.577 406.772 258.805 405.355 256.362C403.939 253.92 401.903 251.894 399.452 250.489ZM441.05 187.958C440.078 187.363 439.099 186.78 438.113 186.209L339.233 129.162C336.767 127.727 333.965 126.971 331.112 126.97C328.258 126.971 325.456 127.727 322.991 129.162L202.267 198.783V150.576L202.265 150.493C202.265 150.022 202.489 149.578 202.865 149.296L302.824 91.7019C316.963 83.5607 332.996 79.2748 349.316 79.274C400.712 79.274 442.392 120.902 442.392 172.235C442.389 177.503 441.94 182.761 441.05 187.953V187.958ZM179.544 273.878L137.742 249.776C137.522 249.666 137.333 249.505 137.191 249.305C137.05 249.105 136.959 248.874 136.929 248.631V133.327C136.951 82.0221 178.631 40.4283 230.004 40.4283C251.762 40.4328 272.832 48.0456 289.557 61.9455C288.805 62.3559 287.492 63.0797 286.62 63.6079L187.74 120.653C185.273 122.055 183.221 124.084 181.794 126.535C180.367 128.985 179.614 131.77 179.614 134.605V134.697L179.544 273.878ZM202.248 224.989L256.016 193.972L309.783 224.968V286.982L256.016 317.979L202.248 286.982V224.989Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LogoutIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}

function ThemeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

function DashboardIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  );
}

function SettingsIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function Pencil({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="none"
      className={className}
    >
      <path
        d="M23.2529 2.92025L21.0781 0.745258C20.0844 -0.248443 18.4677 -0.248396 17.474 0.745258C16.5384 1.68093 2.2483 15.9721 1.29332 16.9271C1.1916 17.0289 1.12345 17.164 1.09917 17.2963L0.0117616 23.1688C-0.0303789 23.3964 0.0421834 23.6303 0.205917 23.794C0.369839 23.9579 0.603745 24.0304 0.831135 23.9882L6.70311 22.9007C6.83881 22.8754 6.97222 22.8066 7.07225 22.7065L23.2529 6.52461C24.2489 5.52861 24.249 3.91639 23.2529 2.92025ZM1.58066 22.4191L2.23846 18.8668L5.1328 21.7613L1.58066 22.4191ZM6.57509 21.2149L2.78483 17.4244L16.6228 3.58536L20.413 7.3759L6.57509 21.2149ZM22.2585 5.53025L21.4073 6.38154L17.6171 2.591L18.4683 1.73971C18.9136 1.2943 19.6383 1.29426 20.0837 1.73971L22.2585 3.91471C22.705 4.36119 22.705 5.08372 22.2585 5.53025Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ThumbsUp({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      />
    </svg>
  );
}

function Send({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

function Mic({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function Refresh({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

function ThumbsDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
      />
    </svg>
  );
}

function ImageSet({ images }) {
  return (
    <div className="px-3 flex justify-center py-5">
      <div className="inline-flex relative">
        {images.map(({ key, url }, index) => (
          <div
            className=" p-0.5 rounded-md bg-[#95aa55]"
            key={key}
            style={{
              transform: `rotate(${index % 2 ? 6 : -6}deg)`,
              transformOrigin: "50% 50%",
              marginLeft: "-40px",
            }}
          >
            <img className="w-36 h-36 rounded-md" src={url} />
          </div>
        ))}

        <button
          className="absolute w-9 h-9 bg-brandBlue rounded-full grid place-items-center text-white"
          style={{ right: "14px", top: "5px" }}
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function LinkIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="none"
      className={className}
    >
      <path
        d="M12.918 16.5902L9.24585 20.2624C9.24585 20.2624 9.24585 20.2624 9.24576 20.2624C9.24576 20.2624 9.24576 20.2625 9.24568 20.2625C7.72715 21.7812 5.25616 21.7812 3.73746 20.2625C3.00174 19.5268 2.59666 18.5487 2.59666 17.5083C2.59666 16.4681 3.00174 15.4901 3.7372 14.7544C3.73729 14.7543 3.73738 14.7542 3.73746 14.7541L7.40958 11.0819C7.91653 10.5749 7.91653 9.7528 7.40949 9.24585C6.90253 8.73889 6.08043 8.73889 5.57339 9.24585L1.90128 12.918C1.90102 12.9183 1.90076 12.9187 1.9005 12.9189C0.674959 14.1449 0 15.7748 0 17.5083C0 19.2423 0.675219 20.8725 1.90136 22.0986C3.16698 23.3642 4.82927 23.997 6.49166 23.997C8.15404 23.997 9.81642 23.3642 11.0819 22.0986C11.082 22.0986 11.082 22.0985 11.082 22.0985L14.7541 18.4263C15.261 17.9193 15.261 17.0972 14.754 16.5902C14.2471 16.0832 13.4251 16.0832 12.918 16.5902Z"
        fill="currentColor"
      />
      <path
        d="M24 6.49165C24 4.75768 23.3247 3.1275 22.0986 1.90136C19.5674 -0.629698 15.449 -0.629612 12.9181 1.90136C12.918 1.90153 12.9178 1.90162 12.9177 1.90179L9.24568 5.57373C8.73864 6.08068 8.73864 6.90287 9.24568 7.40983C9.49929 7.66344 9.83149 7.79015 10.1638 7.79015C10.496 7.79015 10.8283 7.66335 11.0818 7.40983L14.7538 3.73789C14.7539 3.73772 14.7541 3.73763 14.7542 3.73746C16.2728 2.21893 18.7438 2.21884 20.2625 3.73746C20.9981 4.47318 21.4033 5.45134 21.4033 6.49165C21.4033 7.53187 20.9983 8.50986 20.2627 9.24558L20.2625 9.24584L16.5903 12.918C16.0834 13.425 16.0834 14.2471 16.5904 14.7541C16.844 15.0077 17.1762 15.1345 17.5084 15.1345C17.8407 15.1345 18.173 15.0077 18.4265 14.7541L22.0986 11.0819C22.0989 11.0817 22.0992 11.0813 22.0994 11.0811C23.325 9.85511 24 8.22518 24 6.49165Z"
        fill="currentColor"
      />
      <path
        d="M7.40975 16.5902C7.66327 16.8437 7.99555 16.9705 8.32775 16.9705C8.66004 16.9705 8.99233 16.8437 9.24585 16.5902L16.5902 9.24577C17.0973 8.73881 17.0973 7.91671 16.5902 7.40967C16.0833 6.90271 15.2612 6.90271 14.7541 7.40967L7.40975 14.754C6.9027 15.2611 6.9027 16.0832 7.40975 16.5902Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChatInput() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-input pt-8">
      <div className="" style={{ marginLeft: "384px", marginRight: "320px" }}>
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <div className="flex justify-center py-2">
            <button
              className="py-2.5 px-6 rounded-md bg-card flex items-center"
              onClick={() => {}}
            >
              <Refresh className="w-5 h-5" />
              <span className="ml-2">Regenerate Anwser</span>
            </button>
          </div>

          <div className="bg-card rounded-md relative">
            <textarea
              rows={2}
              className="w-full bg-card rounded-md py-2 px-4 resize-none"
            />

            <div
              className="absolute flex items-center space-x-3"
              style={{
                right: "16px",
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            >
              <button
                className="w-10 h-10 grid place-items-center rounded-md text-white"
                onClick={() => {}}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                className=" w-10 h-10 grid place-items-center bg-brandBlue text-white rounded-md"
                onClick={() => {}}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatHistory() {
  return (
    <div className="fixed left-16 top-0 h-screen w-80 border-r-2 border-r-line bg-body z-10 flex flex-col px-2">
      <div className="shrink-0 px-3 flex items-center py-3">
        <h2 className="shrink-0 text-lg font-semibold ">Chats</h2>
        <div className="shrink-0 w-8 h-8 rounded-full bg-brandBlue ml-2 grid place-items-center text-sm font-semibold">
          24
        </div>
        <div className="grow"> </div>
        <button className="">
          <Options className="w-7 h-7" />
        </button>
      </div>
      <div className="shrink-0 flex px-3 space-x-2">
        <div className="h-10 grow rounded-md bg-card relative">
          <input className="h-10 w-full rounded-md bg-card pl-4 pr-10" />
          <div className="absolute right-0 w-10 inset-y-0 grid place-items-center">
            <SearchIcon className="w-5 h-5 text-brandGray" />
          </div>
        </div>
        <div className="h-10 w-10 rounded-md bg-brandOrange grid  place-items-center shrink-0">
          <PencilSquareIcon className="w-5 h-5 text-brandBlue" />
        </div>
      </div>
      <div className="shrink-0 uppercase px-3 mt-4 mb-1 flex items-center">
        <PinnedIcon className="w-5 h-5" />
        <span className="ml-2 text-sm font-semibold">pinned</span>
      </div>
      <div className="shrink-0">
        {pinned.map((item) => (
          <Item item={item} key={item.key} />
        ))}
      </div>
      <div className="shrink-0 uppercase px-3 mt-4 mb-1 flex items-center">
        <ListAllIcon className="w-5 h-5" />
        <span className="ml-2 text-sm font-semibold">all</span>
      </div>
      <div className="grow overflow-x-hidden overflow-y-auto">
        {all.map((item) => (
          <Item item={item} key={item.key} />
        ))}
      </div>
      <div className="shrink-0 px-2 py-3">
        <button
          className="w-full py-2 text-sm rounded-md font-semibold bg-card flex justify-center items-center"
          onClick={() => {}}
        >
          <Times className="w-5 h-5" />
          <span className="ml-2">Clear All Chats</span>
        </button>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="py-1">
      <div
        className={`px-3 py-2 text-sm w-full rounded-md ${
          item.isSelected ? "bg-card" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="grow font-semibold line-clamp-1">{item.title}</h3>
          <span className="shrink-0 pl-2">{item.date}</span>
        </div>

        <p
          className={`line-clamp-2 mt-1 ${
            item.isSelected ? "text-white" : "text-brandGray"
          }`}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-black fixed left-0 top-0 h-screen w-16 z-10 flex flex-col items-center pt-4">
      <div className="w-10 h-10 bg-brandGreen rounded-full shrink-0 grid place-items-center">
        <GPTLogo className="w-6 h-6 text-blue-900" />
      </div>
      <div className="grow flex flex-col space-y-4 pt-24">
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <DashboardIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-brandBlue">
          <ChatIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <UsersIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="shrink-0 pb-4 flex flex-col space-y-4">
        <button
          className="w-10 h-10 rounded-md grid place-items-center "
          style={{ color: "#b0a569" }}
        >
          <ThemeIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-card">
          <LogoutIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function TrendingItem({ item }) {
  return (
    <div className="p-1">
      <div
        className={`rounded-md text-sm font-semibold py-1 px-2 flex items-center  ${
          item.isSelected ? "bg-brandGreen text-blue-900" : "bg-card"
        }`}
      >
        {item.text}
        <TrendingIcon className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}

function Heading({ text }) {
  return (
    <div className="flex items-center justify-between mt-3 mb-1">
      <h3 className="text-md">{text}</h3>
      <Options className="w-7 h-7" />
    </div>
  );
}

function Info() {
  return (
    <div className="border-l-2 border-l-line fixed right-0 top-0 h-screen w-80 bg-body z-10 p-3">
      <div className="flex justify-end">
        <Times className="w-5 h-5" />
      </div>
      <Heading text="Capabilities" />
      <div className="flex space-x-2">
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
            <StarIcon className="w-5 h-5 text-blue-900" />
          </div>
          <p className="mt-4 text-sm">
            Remember what user said earlier in the chat
          </p>
        </div>
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full grid place-items-center bg-[#3a3a3c]">
            <StarIcon className="w-5 h-5 text-white" />
          </div>
          <p className="mt-4 text-sm">
            Allows users to provide follow-up corrections
          </p>
        </div>
      </div>
      <Heading text="Limitations" />
      <div className="flex space-x-2">
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
            <WarningIcon className="w-5 h-5 text-blue-900" />
          </div>
          <p className="mt-4 text-sm">
            May occasionally provide incorrect information
          </p>
        </div>
        <div className="w-1/2 bg-card rounded-md p-2">
          <div className="w-9 h-9 rounded-full bg-[#3a3a3c] grid place-items-center">
            <WarningIcon className="w-5 h-5 text-white" />
          </div>
          <p className="mt-4 text-sm">Limited knowledge of world and events</p>
        </div>
      </div>
      <Heading text="Trending Topics" />
      <div className="flex flex-wrap">
        {trending.map((i) => (
          <TrendingItem item={i} key={i.key} />
        ))}
      </div>

      <div className="mt-6 bg-brandBlue rounded-md p-4">
        <div className="flex items-center justify-center font-semibold">
          <div className=""> Upgrade to </div>
          <div className="ml-2 uppercase bg-brandGreen text-blue-900 rounded-md px-2 py-0.5">
            plus
          </div>
        </div>
        <p className="text-sm px-4 mt-3 text-center text-[#a6aeea]">
          Get faster response speed, priority access to new features
        </p>
        <button className="w-full bg-[#3345c5] rounded-md mt-5 py-3 font-semibold border border-[#4b5cd7]">
          Buy ChatGPT PLUS
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Sidebar />
      <ChatHistory />
      <ChatHeader />
      <Chat />
      <ChatInput />
      <Info />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

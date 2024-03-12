import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppConstants } from "../../util/constants";

export function Login() {
  return (
    <>
      <ErrorHandler/>
      <div className=" px-[1rem] pt-[5rem] w-full flex flex-row justify-center">
        <div className="bg-white w-full h-[28rem]  border border-[#ACACAC] shadow-[0px_4px_8px_0px_rgba(90,90,90,0.25)] rounded-[0.6rem] flex flex-col justify-center gap-[2.2rem] items-center max-w-[500px]">
          {/* TODO: Extract logo svg tag to an svg file */}
          <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"><g clipPath="url(#clip0_413_57)"><path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#004048" /><path d="M30.6657 46.9046C28.331 42.1856 23.7 30.4898 30.3 27.4126C31.2812 27.0041 32.3618 26.8966 33.4043 27.1037C34.4468 27.3109 35.4041 27.8233 36.1547 28.5758L49.7947 43.1508C50.0524 43.404 50.2577 43.7054 50.3988 44.0379C50.54 44.3704 50.6143 44.7274 50.6175 45.0887C50.6207 45.4499 50.5527 45.8082 50.4174 46.1431C50.2822 46.478 50.0822 46.783 49.8291 47.0407C49.5759 47.2984 49.2745 47.5037 48.942 47.6448C48.6095 47.786 48.2525 47.8603 47.8913 47.8635C47.5301 47.8667 47.1718 47.7987 46.8368 47.6634C46.5019 47.5282 46.1969 47.3282 45.9392 47.0751L32.5 32.7201C32.8272 43.1068 38.9432 50.8701 45.8127 58.6773C46.34 59.1842 46.6444 59.8798 46.6588 60.6111C46.6733 61.3424 46.3966 62.0495 45.8897 62.5768C45.3828 63.1042 44.6872 63.4085 43.9559 63.423C43.2246 63.4374 42.5175 63.1607 41.9902 62.6538C37.4761 57.9773 33.6618 52.6727 30.6657 46.9046ZM76.5137 71.5501C76.139 71.1396 75.6711 70.8254 75.1493 70.6339C74.6276 70.4425 74.0675 70.3794 73.5162 70.4501C70.3261 70.8783 67.081 70.6062 64.0067 69.6526C63.5359 69.5137 63.0363 69.5053 62.5611 69.6283C62.086 69.7513 61.6532 70.0012 61.309 70.3511C57.2005 76.5551 70.3125 76.1618 73.167 76.0711L88.2452 92.1283C88.4928 92.3916 88.7898 92.6035 89.1192 92.752C89.4487 92.9005 89.8042 92.9827 90.1654 92.9938C90.5266 93.0049 90.8864 92.9447 91.2244 92.8168C91.5624 92.6888 91.8718 92.4955 92.1351 92.248C92.3984 92.0004 92.6103 91.7034 92.7588 91.374C92.9073 91.0445 92.9894 90.689 93.0005 90.3278C93.0116 89.9666 92.9515 89.6067 92.8235 89.2688C92.6955 88.9308 92.5023 88.6214 92.2547 88.3581L76.5137 71.5501ZM68.25 65.5001C70.0556 65.5026 71.844 65.1488 73.5126 64.4589C75.1813 63.769 76.6973 62.7565 77.974 61.4796L92.1942 47.2566C92.4499 47.0013 92.6528 46.6981 92.7913 46.3644C92.9298 46.0306 93.0012 45.6729 93.0015 45.3115C93.0018 44.9502 92.9308 44.5924 92.7928 44.2584C92.6547 43.9245 92.4523 43.621 92.197 43.3653C91.9416 43.1097 91.6385 42.9068 91.3047 42.7683C90.971 42.6297 90.6132 42.5583 90.2519 42.5581C89.8906 42.5578 89.5327 42.6287 89.1988 42.7668C88.8649 42.9048 88.5614 43.1073 88.3057 43.3626L74.0855 57.5856C72.8778 58.7827 71.3297 59.5774 69.6531 59.861C67.9764 60.1445 66.2531 59.903 64.719 59.1696L83.9442 39.9443C84.2069 39.6907 84.4164 39.3872 84.5605 39.0517C84.7046 38.7162 84.7805 38.3553 84.7837 37.9902C84.7868 37.625 84.7172 37.2629 84.579 36.925C84.4407 36.587 84.2365 36.28 83.9783 36.0218C83.7201 35.7635 83.4131 35.5594 83.0751 35.4211C82.7371 35.2828 82.375 35.2132 82.0099 35.2164C81.6447 35.2196 81.2839 35.2954 80.9484 35.4396C80.6128 35.5837 80.3094 35.7932 80.0557 36.0558L60.825 55.2811C60.0915 53.7469 59.85 52.0236 60.1336 50.347C60.4171 48.6703 61.2118 47.1222 62.409 45.9146L76.6375 31.6943C77.1384 31.1757 77.4156 30.481 77.4093 29.76C77.403 29.0389 77.1138 28.3492 76.604 27.8393C76.0941 27.3295 75.4044 27.0403 74.6833 27.034C73.9623 27.0277 73.2676 27.3049 72.749 27.8058L58.526 42.0261C56.2895 44.2701 54.8948 47.2164 54.5767 50.3686C54.2586 53.5208 55.0366 56.6862 56.7797 59.3318L27.8057 88.3058C27.3048 88.8245 27.0276 89.5192 27.0339 90.2402C27.0401 90.9612 27.3293 91.651 27.8392 92.1608C28.3491 92.6707 29.0388 92.9599 29.7599 92.9662C30.4809 92.9725 31.1756 92.6953 31.6942 92.1943L60.6682 63.2203C62.9173 64.7071 65.5539 65.4999 68.25 65.5001Z" fill="white" /></g><defs><clipPath id="clip0_413_57"><rect width="120" height="120" fill="white" /></clipPath></defs></svg></div>
          <div className="text-[#004048] text-[2.2rem] font-[500]">班級訂餐系統</div>
          <a href={`https://${AppConstants.BACKEND_HOST}/oauth2/authorization/google`}>
            <button className="w-[18rem] h-[3.7rem] border-[2px] border-black rounded-[0.6rem] flex flex-row items-center justify-center gap-[1.8rem]">
              <div className="w-[1.8rem] h-[1.8rem] ">
                {/* TODO: Add google icon */}
                <img src={"GOOGLE_ICON_HERE"} />
              </div>
              <div className=" text-black text-[1.2rem] font-[800] p-0">以Google帳號登入</div>
            </button>
          </a>
          <div className="text-[#565656] text-[1rem] font-[500] ">為確保資料正確，請使用學校帳號登入</div>
        </div>
      </div>
    </>
  )
}

function ErrorHandler(){
  const location = useLocation()
  const navigate = useNavigate();

  function handleLoginError(msg: string) {
    const timeoutId = setTimeout(() => {
      alert(msg)
    }, 150);
    navigate("/login");
    return () => clearTimeout(timeoutId);
  }

  useEffect(()=>{
    const searchParams = new URLSearchParams(location.search);
    switch (searchParams.get("error")) {
    case ("NOT_SCHOOL_ACCOUNT"):
      return handleLoginError("請使用學校帳號登入");
    case ("ACCOUNT_FORMAT_ERROR"):
      return handleLoginError("帳號資料格式錯誤，請回報給開發人員");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}

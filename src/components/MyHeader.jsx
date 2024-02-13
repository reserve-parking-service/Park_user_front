import { DropDown } from "./DropDown";
import { Link } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("access_token");
  const isLoggedIn = token !== null;

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                width="109"
                height="19"
                viewBox="0 0 109 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.517045 18V0.545454H7.40341C8.72727 0.545454 9.85511 0.798295 10.7869 1.30398C11.7188 1.80398 12.429 2.5 12.9176 3.39204C13.4119 4.27841 13.6591 5.30114 13.6591 6.46023C13.6591 7.61932 13.4091 8.64205 12.9091 9.52841C12.4091 10.4148 11.6847 11.1051 10.7358 11.5994C9.79261 12.0937 8.65057 12.3409 7.30966 12.3409H2.92045V9.38352H6.71307C7.4233 9.38352 8.00852 9.26136 8.46875 9.01705C8.93466 8.76705 9.28125 8.4233 9.50852 7.9858C9.74148 7.54261 9.85795 7.03409 9.85795 6.46023C9.85795 5.88068 9.74148 5.375 9.50852 4.94318C9.28125 4.50568 8.93466 4.16761 8.46875 3.92898C8.00284 3.68466 7.41193 3.5625 6.69602 3.5625H4.20739V18H0.517045ZM17.769 18H13.8145L19.84 0.545454H24.5957L30.6128 18H26.6582L22.2861 4.53409H22.1497L17.769 18ZM17.5218 11.1392H26.8628V14.0199H17.5218V11.1392ZM33.4336 18V0.545454H40.32C41.6382 0.545454 42.7632 0.78125 43.695 1.25284C44.6325 1.71875 45.3455 2.38068 45.8342 3.23864C46.3285 4.09091 46.5757 5.09375 46.5757 6.24716C46.5757 7.40625 46.3257 8.40341 45.8257 9.23864C45.3257 10.0682 44.6012 10.7045 43.6524 11.1477C42.7092 11.5909 41.5671 11.8125 40.2262 11.8125H35.6154V8.84659H39.6296C40.3342 8.84659 40.9194 8.75 41.3853 8.55682C41.8512 8.36364 42.1978 8.07386 42.4251 7.6875C42.658 7.30114 42.7745 6.82102 42.7745 6.24716C42.7745 5.66761 42.658 5.17898 42.4251 4.78125C42.1978 4.38352 41.8484 4.08239 41.3768 3.87784C40.9109 3.66761 40.3228 3.5625 39.6126 3.5625H37.1239V18H33.4336ZM42.8597 10.0568L47.1978 18H43.1239L38.8796 10.0568H42.8597ZM49.9036 18V0.545454H53.5939V8.24148H53.8241L60.1053 0.545454H64.5286L58.0513 8.3608L64.6053 18H60.1905L55.4093 10.8239L53.5939 13.0398V18H49.9036ZM70.8608 0.545454V18H67.1705V0.545454H70.8608ZM89.2165 0.545454V18H86.029L78.4352 7.0142H78.3074V18H74.617V0.545454H77.8557L85.3898 11.5227H85.5432V0.545454H89.2165ZM104.559 6.1875C104.44 5.77273 104.272 5.40625 104.057 5.08807C103.841 4.7642 103.576 4.49148 103.264 4.26989C102.957 4.04261 102.605 3.86932 102.207 3.75C101.815 3.63068 101.38 3.57102 100.903 3.57102C100.011 3.57102 99.227 3.79261 98.5508 4.23579C97.8804 4.67898 97.3576 5.32386 96.9826 6.17045C96.6076 7.01136 96.4201 8.03977 96.4201 9.25568C96.4201 10.4716 96.6048 11.5057 96.9741 12.358C97.3434 13.2102 97.8662 13.8608 98.5423 14.3097C99.2184 14.7528 100.017 14.9744 100.937 14.9744C101.772 14.9744 102.485 14.8267 103.076 14.5312C103.673 14.2301 104.128 13.8068 104.44 13.2614C104.758 12.7159 104.917 12.071 104.917 11.3267L105.667 11.4375H101.167V8.65909H108.471V10.858C108.471 12.392 108.147 13.7102 107.5 14.8125C106.852 15.9091 105.96 16.7557 104.824 17.3523C103.687 17.9432 102.386 18.2386 100.92 18.2386C99.2838 18.2386 97.8463 17.8778 96.6076 17.1562C95.369 16.429 94.4031 15.3977 93.7099 14.0625C93.0224 12.7216 92.6787 11.1307 92.6787 9.28977C92.6787 7.875 92.8832 6.61364 93.2923 5.50568C93.7071 4.39205 94.2866 3.44886 95.0309 2.67614C95.7753 1.90341 96.6417 1.31534 97.6304 0.911931C98.619 0.508522 99.69 0.306818 100.843 0.306818C101.832 0.306818 102.753 0.451704 103.605 0.741477C104.457 1.02557 105.213 1.42898 105.872 1.9517C106.537 2.47443 107.079 3.09659 107.5 3.81818C107.92 4.53409 108.19 5.32386 108.309 6.1875H104.559Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    메인페이지
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    고객센터
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    프로젝트 소개
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="sr-only" htmlFor="search">
                    검색
                  </label>

                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="어떤 것을 찾으시나요?"
                  />

                  <button
                    type="button"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  to="#"
                  className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </Link>
              </div>

              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              ></span>

              <div className="flex items-center gap-4">
                {isLoggedIn ? (
                  <DropDown />
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/login"
                      style={{ background: "#111827" }}
                    >
                      로그인
                    </a>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium"
                        href="/signup"
                        style={{ color: "#111827" }}
                      >
                        회원가입
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

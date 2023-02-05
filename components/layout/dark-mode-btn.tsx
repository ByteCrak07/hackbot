import React, { FC, useState, useEffect } from 'react'

const DarkModeBtn: FC<{ type: 'button' | 'toggle' }> = ({ type }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setIsDarkMode(true)
    else if (localStorage.getItem('theme') === 'bright') setIsDarkMode(false)
    else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (!isDarkMode) document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')
  }, [isDarkMode])

  const toggleTheme = () => {
    if (isDarkMode) localStorage.setItem('theme', 'bright')
    else localStorage.setItem('theme', 'dark')

    setIsDarkMode(!isDarkMode)
  }

  if (type === 'button')
    return (
      <button
        className="toggle-theme mr-3 rounded-lg border border-gray-600 border-opacity-40 p-3 hover:shadow dark:border-white dark:border-opacity-40"
        onClick={toggleTheme}
        aria-label="Dark mode toggle"
      >
        <style jsx>
          {`
            .moon {
              color: rgba(0, 0, 0, 0.5);
            }

            .sun {
              color: rgba(255, 255, 255, 0.5);
            }

            .toggle-theme:hover > .moon {
              color: rgba(0, 0, 0, 1);
            }

            .toggle-theme:hover > .sun {
              color: rgba(250, 202, 21, 1);
            }
          `}
        </style>

        {/* moon */}
        {!isDarkMode ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="moon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          </svg>
        ) : null}

        {/* sun */}
        {isDarkMode ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="sun"
          >
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
          </svg>
        ) : null}
      </button>
    )
  else
    return (
      <>
        <style jsx>{`
          input:checked ~ .dot {
            transform: translateX(100%);
          }

          .moon {
            color: rgba(0, 0, 0, 0.5);
            scale: 0.8;
          }

          .sun {
            color: rgba(255, 255, 255, 1);
            scale: 0.8;
          }
        `}</style>

        <div className="flex items-center justify-center">
          <label
            htmlFor="toggle-theme"
            className="flex cursor-pointer items-center"
            aria-label="Dark mode toggle"
          >
            <div className="relative">
              <input
                checked={isDarkMode}
                onChange={toggleTheme}
                id="toggle-theme"
                type="checkbox"
                className="sr-only"
                aria-label="Dark mode toggle"
              />
              <div className="h-4 w-10 rounded-full bg-gray-200 shadow-inner"></div>
              <div
                className={`dot absolute -left-1 -top-1 h-6 w-6 rounded-full shadow transition ${
                  isDarkMode ? 'bg-amber-300' : 'bg-white'
                }`}
              >
                <div className="flex h-full items-center justify-center">
                  {/* moon */}
                  {!isDarkMode ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="moon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                    </svg>
                  ) : null}

                  {/* sun */}
                  {isDarkMode ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sun"
                    >
                      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                  ) : null}
                </div>
              </div>
            </div>
          </label>
        </div>
      </>
    )
}

export default DarkModeBtn

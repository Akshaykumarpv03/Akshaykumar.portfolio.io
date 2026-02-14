import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme')
        return saved ? saved === 'dark' : true
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        document.documentElement.classList.toggle('light', !dark)
        localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

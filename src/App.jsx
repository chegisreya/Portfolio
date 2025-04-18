import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const AppContainer = styled.div`
  background: var(--background);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  z-index: 100;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.5rem;
`

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    ${props => props.isOpen && `
      display: flex;
    `}
  }
`

const NavLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary);
    transform: translateX(20px);
    
    &::before {
      opacity: 1;
      transform: translateX(0);
    }
    
    &::after {
      width: 100%;
    }
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--secondary);
  }
`

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <AppContainer>
      <Nav>
        <NavContent>
          <Logo
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sreya
          </Logo>
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </NavLinks>
        </NavContent>
      </Nav>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </AppContainer>
  )
}

export default App

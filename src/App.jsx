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
  background: var(--background);
  border-bottom: 4px solid var(--primary);
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: repeating-linear-gradient(
      to right,
      var(--primary) 0,
      var(--primary) 5px,
      transparent 5px,
      transparent 10px
    );
  }
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: var(--primary);
  text-shadow: var(--pixel-border);
  padding: 0.5rem;

  &:hover {
    color: var(--accent);
  }
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
    background: var(--background);
    padding: 1rem;
    border: 4px solid var(--primary);
    border-top: none;
    
    ${props => props.isOpen && `
      display: flex;
    `}
  }
`

const NavLink = styled.a`
  font-family: 'Press Start 2P', cursive;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;

  &:hover {
    color: var(--accent);
    transform: scale(1.1);
  }

  &::before {
    content: '>';
    position: absolute;
    left: -1rem;
    opacity: 0;
    transition: all 0.3s ease;
    color: var(--primary);
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(0.5rem);
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
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--accent);
    transform: scale(1.1);
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

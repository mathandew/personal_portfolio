<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container">
      <div class="navbar-brand">
        <a href="#" class="logo">{{ logoText }}</a>
      </div>

      <div class="navbar-menu" :class="{ active: isMenuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>

      <div class="navbar-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      logoText: "Portfolio",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;

  &.scrolled {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4caf50;
    text-decoration: none;
  }

  .navbar-menu {
    display: flex;
    gap: 30px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #4caf50;
      }
    }

    @media (max-width: 768px) {
      position: fixed;
      top: 70px;
      left: -100%;
      width: 100%;
      height: calc(100vh - 70px);
      background: white;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      transition: left 0.3s ease;

      &.active {
        left: 0;
      }
    }
  }

  .navbar-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
      width: 25px;
      height: 3px;
      background: #333;
      margin: 3px 0;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}
</style>

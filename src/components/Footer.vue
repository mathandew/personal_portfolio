<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} John Doe. All rights reserved.</p>
        <a href="#home" class="back-to-top">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 20px 0;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  .back-to-top {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #4caf50;
    border-radius: 50%;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      background: #45a049;
      transform: translateY(-3px);
    }
  }
}
</style>

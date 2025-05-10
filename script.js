/* For button click pop effect */
.clicked {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}

/* For floating bubbles */
.bubble {
  position: fixed;
  bottom: 0;
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  animation: rise linear forwards;
  z-index: 999;
}

@keyframes rise {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

/* Optional: Dark mode styling */
body.dark-mode {
  background: #1a1a1a;
  color: #eee;
}

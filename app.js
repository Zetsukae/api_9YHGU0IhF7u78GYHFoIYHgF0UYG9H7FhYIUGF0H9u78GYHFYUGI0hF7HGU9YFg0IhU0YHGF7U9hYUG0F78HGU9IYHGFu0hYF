// Streamix Web App

// Services configuration
const services = {
  franime: {
    name: "Franime",
    url: "https://franime.fr/",
  },
  animesama: {
    name: "Anime Sama",
    url: "https://anime-sama.pw/",
  },
  voiranime: {
    name: "Voiranime",
    url: "https://v6.voiranime.com/",
  },
}

// Translations
const locales = {
  fr: {
    welcome: "Bienvenue sur Streamix",
    chooseService: "Choisissez votre service de streaming préféré",
    customUrl: "URL personnalisée",
    go: "Aller",
    home: "Accueil du service",
    refresh: "Actualiser",
    previous: "Précédent",
    next: "Suivant",
    settings: "Paramètres",
    changeService: "Changer de service",
    settingsTitle: "Paramètres Streamix",
    language: "Langue",
    theme: "Thème",
    defaultService: "Service par défaut",
    alwaysAsk: "Toujours demander",
    reset: "Réinitialiser les paramètres",
    dark: "Sombre",
    light: "Clair",
    loading: "Chargement...",
    version: "Streamix Web v1.0.0",
    credits: "Fait avec ❤ par Uniware Team",
    disclaimer: "Nous ne possédons pas les droits des contenus affichés.",
  },
  en: {
    welcome: "Welcome to Streamix",
    chooseService: "Choose your favorite streaming service",
    customUrl: "Custom URL",
    go: "Go",
    home: "Service Home",
    refresh: "Refresh",
    previous: "Previous",
    next: "Next",
    settings: "Settings",
    changeService: "Change service",
    settingsTitle: "Streamix Settings",
    language: "Language",
    theme: "Theme",
    defaultService: "Default service",
    alwaysAsk: "Always ask",
    reset: "Reset settings",
    dark: "Dark",
    light: "Light",
    loading: "Loading...",
    version: "Streamix Web v1.0.0",
    credits: "Made with ❤ by Uniware Team",
    disclaimer: "We do not own the rights to the displayed content.",
  },
  es: {
    welcome: "Bienvenido a Streamix",
    chooseService: "Elige tu servicio de streaming favorito",
    customUrl: "URL personalizada",
    go: "Ir",
    home: "Inicio del servicio",
    refresh: "Actualizar",
    previous: "Anterior",
    next: "Siguiente",
    settings: "Configuración",
    changeService: "Cambiar servicio",
    settingsTitle: "Configuración de Streamix",
    language: "Idioma",
    theme: "Tema",
    defaultService: "Servicio predeterminado",
    alwaysAsk: "Siempre preguntar",
    reset: "Restablecer configuración",
    dark: "Oscuro",
    light: "Claro",
    loading: "Cargando...",
    version: "Streamix Web v1.0.0",
    credits: "Hecho con ❤ por Uniware Team",
    disclaimer: "No poseemos los derechos del contenido mostrado.",
  },
  de: {
    welcome: "Willkommen bei Streamix",
    chooseService: "Wählen Sie Ihren bevorzugten Streaming-Dienst",
    customUrl: "Benutzerdefinierte URL",
    go: "Los",
    home: "Dienst-Startseite",
    refresh: "Aktualisieren",
    previous: "Zurück",
    next: "Weiter",
    settings: "Einstellungen",
    changeService: "Dienst wechseln",
    settingsTitle: "Streamix Einstellungen",
    language: "Sprache",
    theme: "Design",
    defaultService: "Standarddienst",
    alwaysAsk: "Immer fragen",
    reset: "Einstellungen zurücksetzen",
    dark: "Dunkel",
    light: "Hell",
    loading: "Wird geladen...",
    version: "Streamix Web v1.0.0",
    credits: "Mit ❤ gemacht von Uniware Team",
    disclaimer: "Wir besitzen nicht die Rechte an den angezeigten Inhalten.",
  },
  it: {
    welcome: "Benvenuto su Streamix",
    chooseService: "Scegli il tuo servizio di streaming preferito",
    customUrl: "URL personalizzato",
    go: "Vai",
    home: "Home del servizio",
    refresh: "Aggiorna",
    previous: "Precedente",
    next: "Successivo",
    settings: "Impostazioni",
    changeService: "Cambia servizio",
    settingsTitle: "Impostazioni Streamix",
    language: "Lingua",
    theme: "Tema",
    defaultService: "Servizio predefinito",
    alwaysAsk: "Chiedi sempre",
    reset: "Ripristina impostazioni",
    dark: "Scuro",
    light: "Chiaro",
    loading: "Caricamento...",
    version: "Streamix Web v1.0.0",
    credits: "Fatto con ❤ da Uniware Team",
    disclaimer: "Non possediamo i diritti dei contenuti visualizzati.",
  },
  pt: {
    welcome: "Bem-vindo ao Streamix",
    chooseService: "Escolha seu serviço de streaming favorito",
    customUrl: "URL personalizada",
    go: "Ir",
    home: "Início do serviço",
    refresh: "Atualizar",
    previous: "Anterior",
    next: "Próximo",
    settings: "Configurações",
    changeService: "Mudar serviço",
    settingsTitle: "Configurações do Streamix",
    language: "Idioma",
    theme: "Tema",
    defaultService: "Serviço padrão",
    alwaysAsk: "Sempre perguntar",
    reset: "Redefinir configurações",
    dark: "Escuro",
    light: "Claro",
    loading: "Carregando...",
    version: "Streamix Web v1.0.0",
    credits: "Feito com ❤ pela Uniware Team",
    disclaimer: "Não possuímos os direitos do conteúdo exibido.",
  },
  ja: {
    welcome: "Streamixへようこそ",
    chooseService: "お気に入りのストリーミングサービスを選択",
    customUrl: "カスタムURL",
    go: "移動",
    home: "サービスホーム",
    refresh: "更新",
    previous: "前へ",
    next: "次へ",
    settings: "設定",
    changeService: "サービス変更",
    settingsTitle: "Streamix設定",
    language: "言語",
    theme: "テーマ",
    defaultService: "デフォルトサービス",
    alwaysAsk: "常に確認",
    reset: "設定をリセット",
    dark: "ダーク",
    light: "ライト",
    loading: "読み込み中...",
    version: "Streamix Web v1.0.0",
    credits: "Uniware Teamが❤を込めて作成",
    disclaimer: "表示されるコンテンツの権利は所有していません。",
  },
}

// State
let currentService = null
let currentUrl = null
let menuOpen = false
const history = []
let historyIndex = -1

// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen")
const appContainer = document.getElementById("app-container")
const serviceFrame = document.getElementById("service-frame")
const homeBtn = document.getElementById("streamix-home-btn")
const f1Menu = document.getElementById("f1-menu")
const settingsModal = document.getElementById("settings-modal")
const loadingOverlay = document.getElementById("loading")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadSettings()
  checkDefaultService()
  setupEventListeners()
})

function loadSettings() {
  const savedLang = localStorage.getItem("streamix-language") || "fr"
  const savedTheme = localStorage.getItem("streamix-theme") || "dark"
  const savedService = localStorage.getItem("streamix-default-service") || ""

  document.getElementById("language-select").value = savedLang
  document.getElementById("theme-select").value = savedTheme
  document.getElementById("default-service").value = savedService

  applyTheme(savedTheme)
  applyLanguage(savedLang)
}

function checkDefaultService() {
  const defaultService = localStorage.getItem("streamix-default-service")
  if (defaultService && services[defaultService]) {
    selectService(defaultService)
  }
}

function setupEventListeners() {
  // Click outside menu to close
  document.addEventListener("click", (e) => {
    if (menuOpen && !f1Menu.contains(e.target) && e.target !== homeBtn) {
      closeMenu()
    }
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "F1") {
      e.preventDefault()
      toggleMenu()
    }
    if (e.key === "Escape") {
      closeMenu()
      closeSettings()
    }
  })

  // Frame load event
  serviceFrame.addEventListener("load", () => {
    loadingOverlay.classList.add("hidden")
  })
}

// Service Selection
function selectService(serviceKey) {
  const service = services[serviceKey]
  if (!service) return

  currentService = serviceKey
  currentUrl = service.url

  showApp(service.url)
}

function goToCustomUrl() {
  const input = document.getElementById("custom-url")
  let url = input.value.trim()

  if (!url) return

  // Add protocol if missing
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url
  }

  currentService = "custom"
  currentUrl = url

  showApp(url)
}

function toggleCustomUrl() {
  const container = document.getElementById("custom-url-container")
  const toggleBtn = document.querySelector(".toggle-custom")

  container.classList.toggle("hidden")
  toggleBtn.classList.toggle("active")
}

function showApp(url) {
  welcomeScreen.classList.add("hidden")
  appContainer.classList.remove("hidden")
  loadingOverlay.classList.remove("hidden")

  // Note: Due to X-Frame-Options restrictions, most streaming sites
  // cannot be embedded in iframes. We'll open in a new tab instead.
  // For GitHub Pages deployment, we provide a redirect option.

  serviceFrame.src = url

  // Add to history
  history.push(url)
  historyIndex = history.length - 1

  // Fallback: If iframe doesn't load after 3 seconds, offer to open in new tab
  setTimeout(() => {
    if (!loadingOverlay.classList.contains("hidden")) {
      loadingOverlay.innerHTML = `
        <div class="spinner"></div>
        <p>Le site ne peut pas être intégré ici</p>
        <button onclick="openInNewTab('${url}')" style="
          margin-top: 20px;
          padding: 12px 24px;
          background: #6c7ce7;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 14px;
          cursor: pointer;
        ">Ouvrir dans un nouvel onglet</button>
        <button onclick="showWelcome()" style="
          margin-top: 10px;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid #444;
          border-radius: 10px;
          color: #888;
          font-size: 14px;
          cursor: pointer;
        ">Retour</button>
      `
    }
  }, 3000)
}

function openInNewTab(url) {
  window.open(url || currentUrl, "_blank")
}

function showWelcome() {
  appContainer.classList.add("hidden")
  welcomeScreen.classList.remove("hidden")
  closeMenu()
  serviceFrame.src = ""
  currentService = null
  currentUrl = null
}

// Menu Functions
function toggleMenu() {
  if (menuOpen) {
    closeMenu()
  } else {
    openMenu()
  }
}

function openMenu() {
  f1Menu.classList.remove("hidden")
  menuOpen = true
}

function closeMenu() {
  f1Menu.classList.add("hidden")
  menuOpen = false
}

// Navigation Functions
function goHome() {
  if (currentService && services[currentService]) {
    serviceFrame.src = services[currentService].url
    loadingOverlay.classList.remove("hidden")
  }
  closeMenu()
}

function refresh() {
  loadingOverlay.classList.remove("hidden")
  serviceFrame.src = serviceFrame.src
  closeMenu()
}

function goBack() {
  if (historyIndex > 0) {
    historyIndex--
    serviceFrame.src = history[historyIndex]
    loadingOverlay.classList.remove("hidden")
  }
  closeMenu()
}

function goForward() {
  if (historyIndex < history.length - 1) {
    historyIndex++
    serviceFrame.src = history[historyIndex]
    loadingOverlay.classList.remove("hidden")
  }
  closeMenu()
}

// Settings Functions
function openSettings() {
  settingsModal.classList.remove("hidden")
  closeMenu()
}

function closeSettings() {
  settingsModal.classList.add("hidden")
}

function changeLanguage() {
  const lang = document.getElementById("language-select").value
  localStorage.setItem("streamix-language", lang)
  applyLanguage(lang)
}

function changeTheme() {
  const theme = document.getElementById("theme-select").value
  localStorage.setItem("streamix-theme", theme)
  applyTheme(theme)
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme)
}

function applyLanguage(lang) {
  const t = locales[lang] || locales.fr

  // Update UI text
  document.querySelector(".container h1").textContent = t.welcome
  document.querySelector(".container > p").textContent = t.chooseService
  document.querySelector(".toggle-custom").innerHTML = `<span id="toggle-icon">▶</span> ${t.customUrl}`
  document.querySelector(".custom-go").textContent = t.go

  // Update menu items
  const menuItems = document.querySelectorAll(".menu-item")
  const menuTexts = [t.home, t.refresh, t.previous, t.next, t.settings, t.changeService]
  const menuIcons = ["🏠", "🔄", "⬅️", "➡️", "⚙️", "🔙"]

  let textIndex = 0
  menuItems.forEach((item, index) => {
    if (!item.classList.contains("menu-separator")) {
      item.innerHTML = `<span>${menuIcons[textIndex]}</span> ${menuTexts[textIndex]}`
      textIndex++
    }
  })

  // Update settings
  document.querySelector(".settings-header h2").textContent = "⚙️ " + t.settingsTitle
  document.querySelector(".settings-footer .version").textContent = t.version
  document.querySelector(".settings-footer .credits").textContent = t.credits
  document.querySelector(".settings-footer .disclaimer").textContent = t.disclaimer

  // Update loading text
  document.querySelector(".loading-overlay p").textContent = t.loading
}

function resetSettings() {
  if (confirm("Voulez-vous vraiment réinitialiser tous les paramètres ?")) {
    localStorage.removeItem("streamix-language")
    localStorage.removeItem("streamix-theme")
    localStorage.removeItem("streamix-default-service")
    location.reload()
  }
}

// Save default service when changed
document.getElementById("default-service")?.addEventListener("change", (e) => {
  localStorage.setItem("streamix-default-service", e.target.value)
})

// Expose functions globally for onclick handlers
window.selectService = selectService
window.toggleCustomUrl = toggleCustomUrl
window.goToCustomUrl = goToCustomUrl
window.showWelcome = showWelcome
window.goHome = goHome
window.refresh = refresh
window.goBack = goBack
window.goForward = goForward
window.openSettings = openSettings
window.closeSettings = closeSettings
window.changeLanguage = changeLanguage
window.changeTheme = changeTheme
window.resetSettings = resetSettings
window.openInNewTab = openInNewTab

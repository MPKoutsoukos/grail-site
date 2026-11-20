// grailnotebook.com: the small interactive bits. Everything on the page works without this file.

// 1. the prompt types itself
const typed = document.getElementById('typed')
if (typed && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const text = typed.dataset.text
  typed.textContent = ''
  let i = 0
  const tick = () => { typed.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(tick, 70 + Math.random() * 60) }
  setTimeout(tick, 400)
}

// 2. screenshot tabs: [android] [desktop]
const tabs = [...document.querySelectorAll('.tabs [role=tab]')]
const show = (tab) => {
  for (const t of tabs) {
    const on = t === tab
    t.setAttribute('aria-selected', String(on))
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on
  }
}
tabs.forEach((t) => t.addEventListener('click', () => show(t)))
if (tabs.length) show(tabs[0])

// 3. click a screenshot to see it full size; esc or a click closes it
const viewer = document.getElementById('viewer')
const big = viewer?.querySelector('img')
document.querySelectorAll('figure img').forEach((img) => img.addEventListener('click', () => {
  big.src = img.src; big.alt = img.alt; viewer.hidden = false
}))
viewer?.addEventListener('click', () => { viewer.hidden = true })

// 4. mark the download that fits this computer
const ua = navigator.userAgent
const os = /Android/i.test(ua) ? 'android' : /Windows/i.test(ua) ? 'windows' : /Linux|X11/i.test(ua) ? 'linux' : null
const row = os && document.querySelector(`tr[data-os="${os}"]`)
if (row) {
  row.classList.add('yours')
  const hint = document.getElementById('os-hint')
  hint.textContent = `> looks like you're on ${os}.`
  hint.hidden = false
}

// 5. the status bar: highlight the section on screen, keys 1-6 jump, a clock on the right
const wins = [...document.querySelectorAll('#status a[data-win]')]
const sections = [...document.querySelectorAll('section[data-win]')]
const mark = () => {
  let current = sections[0]
  for (const s of sections) if (s.getBoundingClientRect().top < innerHeight * 0.35) current = s
  wins.forEach((w) => w.classList.toggle('on', w.dataset.win === current?.dataset.win))
}
addEventListener('scroll', mark, { passive: true })
mark()
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && viewer && !viewer.hidden) { viewer.hidden = true; return }
  if (e.ctrlKey || e.metaKey || e.altKey || /input|textarea/i.test(e.target.tagName)) return
  const n = Number(e.key)
  if (n >= 1 && n <= wins.length) { e.preventDefault(); document.querySelector(wins[n - 1].getAttribute('href')).scrollIntoView({ behavior: 'smooth' }) }
})
const clock = document.getElementById('clock')
const tickClock = () => { const d = new Date(); clock.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` }
if (clock) { tickClock(); setInterval(tickClock, 15000) }

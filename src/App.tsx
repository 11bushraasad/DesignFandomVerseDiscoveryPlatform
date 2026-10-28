import { useMemo, useState } from "react"

type Page = "home" | "explore" | "details" | "community" | "onboarding" | "discover" | "friends" | "messages" | "profile" | "settings"
type IconName = "arrow" | "bell" | "bookmark" | "check" | "chevron" | "close" | "comment" | "compass" | "edit" | "heart" | "home" | "image" | "menu" | "more" | "people" | "search" | "send" | "settings" | "share" | "sparkle" | "user"

const photos = {
  tokyo:
    "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=1600&q=85",
  city: "https://images.unsplash.com/photo-1557515126-1bf9ada5cb93?auto=format&fit=crop&w=1200&q=85",
  blue: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
  lamps:
    "https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?auto=format&fit=crop&w=1200&q=85",
  aerial:
    "https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?auto=format&fit=crop&w=1200&q=85",
  rails:
    "https://images.unsplash.com/photo-1586968272237-a3d597214887?auto=format&fit=crop&w=1200&q=85",
  street:
    "https://images.unsplash.com/photo-1586766193036-6d93c6c6c703?auto=format&fit=crop&w=1200&q=85",
  moto: "https://images.unsplash.com/photo-1599060052009-24d6d0b0161c?auto=format&fit=crop&w=1200&q=85",
}

const fandoms = [
  {
    name: "Monster High",
    category: "TV Shows",
    desc: "Freaky-fab fashion, friendships, dolls, and stories where everyone belongs.",
    members: "1.2M",
    image: "/fandoms/monster-high.png",
    color: "magenta",
  },
  {
    name: "BTS",
    category: "K-pop",
    desc: "Music, eras, performances, and seven voices shared with ARMY around the world.",
    members: "8.7M",
    image: "/fandoms/bts.png",
    color: "purple",
  },
  {
    name: "Demon Slayer",
    category: "Anime",
    desc: "Breathing styles, brave hearts, and bonds that cut through darkness.",
    members: "2.4M",
    image: "/fandoms/demon-slayer.png",
    color: "magenta",
  },
  {
    name: "Arcane",
    category: "TV Shows",
    desc: "Explore the art, theories, and divided cities of Piltover and Zaun.",
    members: "1.8M",
    image: "/fandoms/arcane.png",
    color: "cyan",
  },
  {
    name: "Cyberpunk 2077",
    category: "Gaming",
    desc: "Stories, builds, and secrets from the neon streets of Night City.",
    members: "1.3M",
    image: "/fandoms/cyberpunk-2077.png",
    color: "yellow",
  },
  {
    name: "The Batman",
    category: "Movies",
    desc: "Decode Gotham’s shadows with film fans and comic detectives.",
    members: "865K",
    image: photos.rails,
    color: "cyan",
  },
  {
    name: "Fourth Wing",
    category: "Books",
    desc: "Dragon riders, theories, and chapter-by-chapter conversation.",
    members: "642K",
    image: "/fandoms/books.png",
    color: "magenta",
  },
  {
    name: "Spider-Verse",
    category: "Comics",
    desc: "Every universe, every hero, one spectacular community.",
    members: "1.1M",
    image: "/fandoms/dc-comics.png",
    color: "cyan",
  },
  {
    name: "Stranger Things",
    category: "TV Shows",
    desc: "Revisit Hawkins, trade theories, and enter the Upside Down.",
    members: "1.9M",
    image: photos.street,
    color: "yellow",
  },
]

const people = [
  {
    name: "Mina Park",
    handle: "@moonlitmina",
    initials: "MP",
    bio: "Anime illustrator, ARMY, and professional lore detective.",
    fandoms: ["BTS", "Demon Slayer", "Arcane"],
    shared: 3,
    online: true,
    tone: "pink",
  },
  {
    name: "Alex Rivera",
    handle: "@nightcityalex",
    initials: "AR",
    bio: "Gaming after dark. Always looking for a co-op partner.",
    fandoms: ["Cyberpunk 2077", "Arcane", "DC Comics"],
    shared: 3,
    online: true,
    tone: "cyan",
  },
  {
    name: "Jules Chen",
    handle: "@julesreads",
    initials: "JC",
    bio: "Fantasy books, fan theories, and emotionally devastating finales.",
    fandoms: ["Fourth Wing", "Monster High", "Demon Slayer"],
    shared: 2,
    online: false,
    tone: "purple",
  },
  {
    name: "Noah Kim",
    handle: "@hobiverse",
    initials: "NK",
    bio: "Concert memories, dance covers, and positive energy.",
    fandoms: ["BTS", "Monster High", "Arcane"],
    shared: 4,
    online: true,
    tone: "yellow",
  },
  {
    name: "Sam Okafor",
    handle: "@panelhopper",
    initials: "SO",
    bio: "Comics, cosplay builds, and every version of Gotham.",
    fandoms: ["DC Comics", "Cyberpunk 2077", "Monster High"],
    shared: 2,
    online: false,
    tone: "cyan",
  },
  {
    name: "Lena Ortiz",
    handle: "@pinkcrypt",
    initials: "LO",
    bio: "Doll collector, stylist, and proud Monster High historian.",
    fandoms: ["Monster High", "BTS", "Fourth Wing"],
    shared: 3,
    online: true,
    tone: "pink",
  },
]

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    bookmark: <path d="M6 3h12v18l-6-4-6 4V3z" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    comment: (
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8z" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2 2 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m21 15-5-5L5 20" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    people: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
        <path d="M22 2 11 13" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost" | "icon"
  icon?: IconName
  onClick?: () => void
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  )
}

function Badge({
  children,
  tone = "purple",
}: {
  children: React.ReactNode
  tone?: string
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function SectionTitle({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow?: string
  title: string
  action?: string
  onAction?: () => void
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action && (
        <button className="text-link" onClick={onAction}>
          {action}
          <Icon name="arrow" size={17} />
        </button>
      )}
    </div>
  )
}

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button className="logo" onClick={onClick} aria-label="FandomVerse home">
      <span className="logo-mark">
        <Icon name="sparkle" size={19} />
      </span>
      <strong>
        Fandom<span>Verse</span>
      </strong>
    </button>
  )
}

function Header({ page, go }: { page: Page go: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const links: [string, Page][] = [
    ["Home", "home"],
    ["Explore", "explore"],
    ["Find Friends", "friends"],
    ["Communities", "community"],
    ["Messages", "messages"],
    ["Trending", "discover"],
  ]
  return (
    <header className="header">
      <div className="header-inner">
        <Logo onClick={() => go("home")} />
        <nav className={open ? "nav open" : "nav"}>
          {links.map(([label, target]) => (
            <button
              key={label}
              className={page === target ? "active" : ""}
              onClick={() => {
                go(target)
                setOpen(false)
              }}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="round-btn notification"
            onClick={() => go("settings")}
            aria-label="Notifications"
          >
            <Icon name="bell" />
          </button>
          <button className="message-shortcut" onClick={() => go("messages")}>
            <Icon name="comment" />
            <span>3</span>
          </button>
          <Button variant="secondary" onClick={() => go("friends")}>
            Find Friends
          </Button>
          <button
            className="avatar"
            onClick={() => go("profile")}
            aria-label="Open profile"
          >
            KY
          </button>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  )
}

function FandomCard({
  item,
  go,
  following,
  onFollow,
  compact = false,
}: {
  item: typeof fandoms[number]
  go: (p: Page) => void
  following: string[]
  onFollow: (name: string) => void
  compact?: boolean
}) {
  const followed = following.includes(item.name)
  return (
    <article className={`fandom-card ${compact ? "compact" : ""}`}>
      <button
        className="card-image"
        onClick={() => go("details")}
        aria-label={`Open ${item.name}`}
      >
        <img src={item.image} alt="" />
        <Badge tone={item.color}>{item.category}</Badge>
        <span className="card-arrow">
          <Icon name="arrow" size={18} />
        </span>
      </button>
      <div className="card-body">
        <div>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
        <div className="card-meta">
          <span>
            <Icon name="people" size={16} />
            {item.members}
          </span>
          <Button
            variant={followed ? "secondary" : "primary"}
            onClick={() => onFollow(item.name)}
          >
            {followed ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </article>
  )
}

function Home({ go, following, onFollow }: ScreenProps) {
  const categories = [
    ["Anime", "01", "Infinite worlds"],
    ["K-pop", "02", "Music & idols"],
    ["Gaming", "03", "Play together"],
    ["Movies & TV", "04", "Stories that stay"],
    ["Books", "05", "Beyond the page"],
    ["Comics", "06", "Every universe"],
  ]
  return (
    <main>
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-content">
          <Badge tone="purple">
            <Icon name="sparkle" size={14} /> Your universe starts here
          </Badge>
          <h1>
            Find Your Fandom.
            <br />
            <span>Find Your People.</span>
          </h1>
          <p>Discover universes you love and meet friends who love them too.</p>
          <div className="hero-actions">
            <Button onClick={() => go("explore")} icon="compass">
              Explore Fandoms
            </Button>
            <Button
              variant="secondary"
              onClick={() => go("friends")}
              icon="people"
            >
              Find Your People
            </Button>
          </div>
          <div className="social-proof">
            <div className="avatar-stack">
              <span>AR</span>
              <span>MK</span>
              <span>JL</span>
              <span>+</span>
            </div>
            <p>
              <strong>12M+</strong> fans finding their people
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <article className="feature-poster">
            <img
              src="/fandoms/demon-slayer.png"
              alt="Demon Slayer characters"
            />
            <div className="poster-gradient" />
            <Badge tone="magenta">Trending #1</Badge>
            <div className="poster-copy">
              <small>ENTER THE UNIVERSE</small>
              <h3>Demon Slayer</h3>
              <p>2.4M fans active now</p>
            </div>
          </article>
          <div className="float-card float-top">
            <span className="pulse" />
            <div>
              <strong>Live discussion</strong>
              <small>Season finale theories</small>
            </div>
          </div>
          <div className="float-card float-bottom">
            <Icon name="sparkle" />
            <div>
              <strong>98% match</strong>
              <small>Based on your vibe</small>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="EXPLORE YOUR OBSESSIONS"
          title="Every universe has a doorway"
          action="View all categories"
          onAction={() => go("explore")}
        />
        <div className="category-grid">
          {categories.map(([name, num, sub]) => (
            <button
              className="category-card"
              key={name}
              onClick={() => go("explore")}
            >
              <span className="category-num">{num}</span>
              <span className="category-icon">
                <Icon
                  name={
                    name === "Gaming"
                      ? "compass"
                      : name === "Books"
                        ? "bookmark"
                        : "sparkle"
                  }
                />
              </span>
              <strong>{name}</strong>
              <small>{sub}</small>
              <span className="mini-arrow">
                <Icon name="arrow" size={17} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="WHAT'S HOT"
          title="Trending across the Verse"
          action="See what’s trending"
          onAction={() => go("discover")}
        />
        <div className="cards-grid">
          {fandoms.slice(0, 3).map((item) => (
            <FandomCard
              key={item.name}
              item={item}
              go={go}
              following={following}
              onFollow={onFollow}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="MORE THAN A FEED"
          title="Meet people who get the reference"
          action="Find your people"
          onAction={() => go("friends")}
        />
        <div className="friend-grid">
          {people.slice(0, 3).map((person) => (
            <FriendCard key={person.handle} person={person} go={go} />
          ))}
        </div>
        <div className="how-it-works">
          {[
            [
              "01",
              "Discover",
              "Explore fandoms shaped around the stories and artists you love.",
            ],
            [
              "02",
              "Connect",
              "Match with fans through shared interests, not personal information.",
            ],
            [
              "03",
              "Chat",
              "Start genuine conversations with privacy controls always nearby.",
            ],
          ].map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="discovery-banner">
          <div>
            <Badge tone="cyan">
              <Icon name="sparkle" size={14} /> Made for you
            </Badge>
            <h2>Your next obsession is closer than you think.</h2>
            <p>
              Tell us what moves you. We’ll build a universe of fandoms,
              conversations, and creators uniquely yours.
            </p>
            <Button onClick={() => go("onboarding")} icon="arrow">
              Personalize my feed
            </Button>
          </div>
          <div className="match-stack">
            {fandoms.slice(3, 6).map((item, i) => (
              <article
                key={item.name}
                style={{ "--i": i } as React.CSSProperties}
              >
                <img src={item.image} alt="" />
                <span>{96 - i * 3}% match</span>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

type ScreenProps = {
  go: (p: Page) => void
  following: string[]
  onFollow: (name: string) => void
  toast?: (s: string) => void
}

function Explore({ go, following, onFollow }: ScreenProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState("Trending")
  const [surprise, setSurprise] = useState<typeof fandoms[number] | null>(null)
  const categories = [
    "All",
    "Anime",
    "K-pop",
    "Movies",
    "TV Shows",
    "Gaming",
    "Books",
    "Comics",
    "Other",
  ]
  const filtered = useMemo(
    () =>
      fandoms.filter(
        (f) =>
          (category === "All" || f.category === category) &&
          `${f.name} ${f.desc}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  )
  return (
    <main className="page">
      <div className="page-intro">
        <Badge tone="purple">EXPLORE THE VERSE</Badge>
        <h1>
          Find something worth
          <br />
          <span>obsessing over.</span>
        </h1>
        <p>Search thousands of fandoms and meet the people who get it.</p>
      </div>
      <div className="explore-toolbar">
        <label className="search-box">
          <Icon name="search" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anime, artists, games, movies, and more…"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <Icon name="close" size={17} />
            </button>
          )}
        </label>
        <Button
          variant="secondary"
          icon="sparkle"
          onClick={() =>
            setSurprise(fandoms[Math.floor(Math.random() * fandoms.length)])
          }
        >
          Surprise Me
        </Button>
        <Button icon="people" onClick={() => go("friends")}>
          Find Fans Like You
        </Button>
      </div>
      <div className="filter-row">
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={category === c ? "selected" : ""}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="sort-select">
          Sort by{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Recently Added</option>
            <option>Most Active</option>
          </select>
        </label>
      </div>
      <div className="results-head">
        <p>
          <strong>{filtered.length}</strong> fandoms waiting for you
        </p>
        <span>Updated live</span>
      </div>
      {filtered.length ? (
        <div className="cards-grid explore-grid">
          {filtered.map((item) => (
            <FandomCard
              key={item.name}
              item={item}
              go={go}
              following={following}
              onFollow={onFollow}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>
            <Icon name="search" size={30} />
          </span>
          <h2>No universes found</h2>
          <p>Try another search or clear your filters to keep exploring.</p>
          <Button
            onClick={() => {
              setQuery("")
              setCategory("All")
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
      {surprise && (
        <div className="modal-backdrop" onClick={() => setSurprise(null)}>
          <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSurprise(null)}>
              <Icon name="close" />
            </button>
            <Badge tone="cyan">
              <Icon name="sparkle" size={14} /> Cosmic pick
            </Badge>
            <img src={surprise.image} alt="" />
            <h2>Meet {surprise.name}</h2>
            <p>{surprise.desc}</p>
            <div>
              <Button onClick={() => go("details")}>Enter fandom</Button>
              <Button
                variant="secondary"
                onClick={() =>
                  setSurprise(
                    fandoms[Math.floor(Math.random() * fandoms.length)],
                  )
                }
              >
                Try again
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Details({ go, following, onFollow, toast = () => {} }: ScreenProps) {
  const [joined, setJoined] = useState(false)
  return (
    <main className="details-page">
      <section className="detail-hero">
        <img src="/fandoms/demon-slayer.png" alt="Demon Slayer characters" />
        <div className="detail-overlay" />
        <div className="detail-content">
          <div className="breadcrumb">
            <button onClick={() => go("explore")}>Explore</button>
            <Icon name="chevron" size={14} />
            <span>Anime</span>
          </div>
          <Badge tone="magenta">Anime · Dark fantasy</Badge>
          <h1>Demon Slayer</h1>
          <p>
            Where resolve becomes a blade. Join millions of fans celebrating the
            art, emotion, and unforgettable journey of the Demon Slayer Corps.
          </p>
          <div className="stats">
            <span>
              <strong>2.4M</strong>Members
            </span>
            <span>
              <strong>18.7K</strong>Online now
            </span>
            <span>
              <strong>24K</strong>Posts this week
            </span>
          </div>
          <div className="detail-actions">
            <Button
              icon={joined ? "check" : "people"}
              onClick={() => {
                setJoined(!joined)
                toast(
                  joined
                    ? "You left Demon Slayer"
                    : "Welcome to the Demon Slayer fandom!",
                )
              }}
            >
              {joined ? "Joined" : "Join Fandom"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => onFollow("Demon Slayer")}
            >
              {following.includes("Demon Slayer") ? "Following" : "Follow"}
            </Button>
            <Button
              variant="icon"
              icon="share"
              onClick={() => toast("Share link copied")}
            >
              Share
            </Button>
            <Button
              variant="secondary"
              icon="people"
              onClick={() => go("friends")}
            >
              Find Friends in This Fandom
            </Button>
          </div>
        </div>
      </section>
      {joined && (
        <div className="confirmation">
          <Icon name="check" />
          <div>
            <strong>You’re part of the Corps.</strong>
            <span>Your feed now includes Demon Slayer updates.</span>
          </div>
          <button onClick={() => setJoined(false)}>
            <Icon name="close" size={17} />
          </button>
        </div>
      )}
      <section className="section detail-layout">
        <div className="detail-main">
          <div className="tabs">
            <button className="active">Overview</button>
            <button onClick={() => go("community")}>Discussions</button>
            <button>Fan art</button>
            <button>Recommendations</button>
            <button>Announcements</button>
            <button onClick={() => go("friends")}>Members</button>
          </div>
          <SectionTitle
            eyebrow="THE CONVERSATION"
            title="The fandom is buzzing"
            action="Open community"
            onAction={() => go("community")}
          />
          <PostCard toast={toast} />
          <PostCard art toast={toast} />
        </div>
        <aside>
          <div className="side-card">
            <h3>Community guidelines</h3>
            <p>A kind community is a strong community.</p>
            {[
              "Respect every fan",
              "Credit artists and creators",
              "Use spoiler tags",
              "Keep it on topic",
            ].map((x) => (
              <span key={x}>
                <Icon name="check" size={16} />
                {x}
              </span>
            ))}
            <button>
              Read full guidelines <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="side-card">
            <h3>Related fandoms</h3>
            {fandoms.slice(1, 4).map((x) => (
              <button
                className="related"
                key={x.name}
                onClick={() => go("details")}
              >
                <img src={x.image} alt="" />
                <span>
                  <strong>{x.name}</strong>
                  <small>{x.members} members</small>
                </span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}

function PostCard({
  art = false,
  toast = () => {},
}: {
  art?: boolean
  toast?: (s: string) => void
}) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [comments, setComments] = useState<string[]>([])
  const [draft, setDraft] = useState("")
  return (
    <article className="post-card">
      <div className="post-top">
        <div className="post-author">
          <span className="avatar avatar-purple">{art ? "AN" : "RS"}</span>
          <div>
            <strong>{art ? "AkariNova" : "RengokuStan"}</strong>
            <small>{art ? "Fan artist · 1h" : "Theory Crafter · 24m"}</small>
          </div>
        </div>
        <button>
          <Icon name="more" />
        </button>
      </div>
      <Badge tone={art ? "cyan" : "purple"}>{art ? "FAN ART" : "THEORY"}</Badge>
      <h3>
        {art
          ? "“The quiet before the storm” — my latest Shinobu piece"
          : "What if the blue spider lily only blooms under moonlight?"}
      </h3>
      <p>
        {art
          ? "Spent all weekend on the lighting for this one. The butterfly motif means so much to her story."
          : "Rewatching episode 7 and there’s one detail I can’t stop thinking about. The framing feels way too intentional to be a coincidence…"}
      </p>
      {art && (
        <img
          className="post-art"
          src={photos.lamps}
          alt="Purple lights representing fan artwork"
        />
      )}
      <div className="post-actions">
        <button
          className={liked ? "liked" : ""}
          onClick={() => setLiked(!liked)}
        >
          <Icon name="heart" size={18} />
          {liked ? 439 : 438}
        </button>
        <button
          onClick={() => document.getElementById("comment-input")?.focus()}
        >
          <Icon name="comment" size={18} />
          {comments.length + (art ? 62 : 94)}
        </button>
        <button
          className={saved ? "saved" : ""}
          onClick={() => {
            setSaved(!saved)
            toast(saved ? "Removed from saved" : "Post saved")
          }}
        >
          <Icon name="bookmark" size={18} />
        </button>
        <button onClick={() => toast("Post link copied")}>
          <Icon name="share" size={18} />
        </button>
      </div>
      {!art && (
        <div className="comment-box">
          <input
            id="comment-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add to the conversation…"
          />
          <button
            onClick={() => {
              if (draft.trim()) {
                setComments([...comments, draft])
                setDraft("")
              }
            }}
          >
            <Icon name="send" size={18} />
          </button>
        </div>
      )}
      {comments.map((c, i) => (
        <div className="comment" key={i}>
          <span className="avatar">KY</span>
          <p>
            <strong>You</strong>
            {c}
          </p>
        </div>
      ))}
    </article>
  )
}

function Community({ toast = () => {} }: ScreenProps) {
  const [tab, setTab] = useState("Latest")
  const [draft, setDraft] = useState("")
  const [posted, setPosted] = useState(false)
  return (
    <main className="page community-page">
      <div className="community-head">
        <div>
          <Badge tone="magenta">DEMON SLAYER COMMUNITY</Badge>
          <h1>
            Where fans become <span>friends.</span>
          </h1>
          <p>
            Share what you love. Say what you think. Make something together.
          </p>
        </div>
        <div className="community-avatars">
          <div className="avatar-stack">
            <span>AR</span>
            <span>MK</span>
            <span>JL</span>
            <span>+18K</span>
          </div>
          <small>fans online now</small>
        </div>
      </div>
      <div className="community-layout">
        <div>
          <article className="create-post">
            <div className="post-author">
              <span className="avatar">KY</span>
              <div>
                <strong>Share something with the fandom</strong>
                <small>Theories, art, questions—this is your space.</small>
              </div>
            </div>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="What's on your mind?"
            />
            <div className="create-actions">
              <div>
                <button>
                  <Icon name="image" size={18} />
                  Image
                </button>
                <button>
                  <Icon name="sparkle" size={18} />
                  Poll
                </button>
              </div>
              <Button
                disabled={!draft.trim()}
                onClick={() => {
                  setPosted(true)
                  setDraft("")
                  toast("Your post is live")
                }}
              >
                Post
              </Button>
            </div>
          </article>
          <div className="feed-tabs">
            {["Latest", "Popular", "Following"].map((x) => (
              <button
                className={tab === x ? "active" : ""}
                onClick={() => setTab(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          {posted && (
            <article className="post-card new-post">
              <Badge tone="cyan">JUST NOW</Badge>
              <h3>Your post is live in the community.</h3>
              <p>Fans can now like, comment, save, and share it.</p>
            </article>
          )}
          <div className="announcement">
            <Icon name="sparkle" />
            <div>
              <Badge tone="yellow">COMMUNITY ANNOUNCEMENT</Badge>
              <strong>
                Watch party this Friday — Entertainment District Arc
              </strong>
              <span>Set a reminder and join 4,200 other fans.</span>
            </div>
            <Button variant="secondary">Remind me</Button>
          </div>
          <PostCard toast={toast} />
          <PostCard art toast={toast} />
        </div>
        <aside>
          <div className="side-card weekly">
            <span>THIS WEEK</span>
            <strong>24,862</strong>
            <p>new conversations started</p>
            <div>
              <i style={{ height: "42%" }} />
              <i style={{ height: "67%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "84%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "95%" }} />
              <i style={{ height: "76%" }} />
            </div>
          </div>
          <div className="side-card">
            <h3>Trending topics</h3>
            {[
              "#InfinityCastle",
              "#HashiraTraining",
              "#MitsuriArt",
              "#MangaTheory",
            ].map((x, i) => (
              <button className="topic" key={x}>
                <span>0{i + 1}</span>
                <strong>{x}</strong>
                <small>{12 - i * 2.1}K posts</small>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}

function Onboarding({ go }: ScreenProps) {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<string[]>([])
  const data: Record<number, {
    kicker: string
    title: string
    copy: string
    options: string[]
  }> = {
    1: {
      kicker: "STEP 01 · THE BIG PICTURE",
      title: "What worlds pull you in?",
      copy: "Choose as many as you like. Your universe can be infinite.",
      options: [
        "Anime",
        "K-pop",
        "Movies",
        "TV Shows",
        "Gaming",
        "Books",
        "Comics",
        "Other",
      ],
    },
    2: {
      kicker: "STEP 02 · GET SPECIFIC",
      title: "Name your obsessions.",
      copy: "Pick a few favorites so we can find your people.",
      options: fandoms.map((f) => f.name),
    },
    3: {
      kicker: "STEP 03 · YOUR SOCIAL VIBE",
      title: "How do you want to connect?",
      copy: "Choose the kinds of connections you want to make.",
      options: [
        "Make new friends",
        "Join discussions",
        "Share fan art",
        "Find gaming partners",
        "Discuss theories",
        "Attend watch parties",
        "Trade recommendations",
        "Create together",
      ],
    },
    4: {
      kicker: "STEP 04 · FRIEND DISCOVERY",
      title: "Who would you like to meet?",
      copy: "Everything here is optional and can be changed later.",
      options: [
        "3+ shared fandoms",
        "English",
        "Korean",
        "Spanish",
        "Text chat",
        "Gaming voice chat",
        "Recently active",
        "Same time zone",
      ],
    },
    5: {
      kicker: "STEP 05 · YOUR UNIVERSE",
      title: "This feels like you.",
      copy: "We found communities and people we think you’ll love.",
      options: [],
    },
  }
  const toggle = (x: string) =>
    setSelected(
      selected.includes(x) ? selected.filter((s) => s !== x) : [...selected, x],
    )
  return (
    <main className="onboarding">
      <div className="onboard-top">
        <Logo onClick={() => go("home")} />
        <button
          className="skip"
          onClick={() => (step < 5 ? setStep(step + 1) : go("discover"))}
        >
          Skip for now
        </button>
      </div>
      <div className="progress">
        <span style={{ width: `${step * 20}%` }} />
      </div>
      <section className="onboard-content">
        <div className="step-count">
          <strong>0{step}</strong>
          <span>/ 05</span>
        </div>
        <Badge tone="purple">{data[step].kicker}</Badge>
        <h1>{data[step].title}</h1>
        <p>{data[step].copy}</p>
        {step < 5 ? (
          <div className={`choice-grid step-${step}`}>
            {data[step].options.map((x, i) => (
              <button
                key={x}
                className={selected.includes(x) ? "selected" : ""}
                onClick={() => toggle(x)}
              >
                <span
                  className="choice-art"
                  style={{
                    backgroundImage: `url(${fandoms[i % fandoms.length].image})`,
                  }}
                />
                <span className="choice-check">
                  <Icon name="check" size={16} />
                </span>
                <strong>{x}</strong>
              </button>
            ))}
          </div>
        ) : (
          <div className="recommendation-preview">
            {fandoms.slice(0, 3).map((x, i) => (
              <article key={x.name}>
                <img src={x.image} alt="" />
                <div>
                  <Badge tone={x.color}>{97 - i * 3}% MATCH</Badge>
                  <h3>{x.name}</h3>
                  <p>{x.desc}</p>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="onboard-actions">
          <Button
            variant="ghost"
            icon="arrow"
            onClick={() => (step > 1 ? setStep(step - 1) : go("home"))}
          >
            Back
          </Button>
          <Button
            icon={step === 5 ? "sparkle" : "arrow"}
            onClick={() => (step < 5 ? setStep(step + 1) : go("discover"))}
          >
            {step === 5 ? "Build My Universe" : "Continue"}
          </Button>
        </div>
      </section>
    </main>
  )
}

function Discover({ go, following, onFollow }: ScreenProps) {
  return (
    <main className="page discover-page">
      <div className="welcome">
        <div>
          <Badge tone="cyan">
            <Icon name="sparkle" size={14} /> YOUR VERSE IS READY
          </Badge>
          <h1>Good evening, Kai.</h1>
          <p>Here’s what’s happening in your corner of the universe.</p>
        </div>
        <button className="avatar large" onClick={() => go("profile")}>
          KY
        </button>
      </div>
      <section className="featured-rec">
        <img src={photos.city} alt="Night cityscape" />
        <div className="featured-shade" />
        <div className="featured-copy">
          <Badge tone="magenta">98% MATCH · FOR YOU</Badge>
          <h2>Arcane</h2>
          <p>
            Because you love complex worlds, unforgettable art, and stories that
            leave a mark.
          </p>
          <div>
            <Button onClick={() => go("details")}>Explore fandom</Button>
            <button
              className="why"
              title="You follow Cyberpunk 2077 and liked three animation discussions."
            >
              Why this?
            </button>
          </div>
        </div>
      </section>
      <Collection
        title="Recommended for you"
        items={fandoms.slice(0, 4)}
        go={go}
        following={following}
        onFollow={onFollow}
      />
      <Collection
        title="Your fandoms"
        items={fandoms.slice(3, 7)}
        go={go}
        following={following}
        onFollow={onFollow}
      />
      <Collection
        title="Trending this week"
        items={fandoms.slice(1, 5)}
        go={go}
        following={following}
        onFollow={onFollow}
      />
      <Collection
        title="Because you like immersive worlds"
        items={fandoms.slice(4, 8)}
        go={go}
        following={following}
        onFollow={onFollow}
      />
      <section className="collection">
        <SectionTitle
          eyebrow="PEOPLE YOU MAY LIKE"
          title="Fans with similar interests"
          action="Find more people"
          onAction={() => go("friends")}
        />
        <div className="friend-grid">
          {people.slice(0, 3).map((person) => (
            <FriendCard key={person.handle} person={person} go={go} />
          ))}
        </div>
      </section>
    </main>
  )
}

function Collection({
  title,
  items,
  ...props
}: { title: string items: typeof fandoms } & ScreenProps) {
  return (
    <section className="collection">
      <SectionTitle
        title={title}
        action="See all"
        onAction={() => props.go("explore")}
      />
      <div className="horizontal-cards">
        {items.map((x) => (
          <FandomCard compact key={x.name} item={x} {...props} />
        ))}
      </div>
    </section>
  )
}

function FriendCard({
  person,
  go,
  toast = () => {},
}: {
  person: typeof people[number]
  go: (p: Page) => void
  toast?: (s: string) => void
}) {
  const [followed, setFollowed] = useState(false)
  const [connected, setConnected] = useState(false)
  return (
    <article className="friend-card">
      <div className="friend-card-top">
        <span className={`friend-avatar avatar-${person.tone}`}>
          {person.initials}
          {person.online && <i />}
        </span>
        <button className="friend-more" aria-label="More options">
          <Icon name="more" />
        </button>
      </div>
      <div className="friend-identity">
        <h3>{person.name}</h3>
        <span>{person.handle}</span>
        <p>{person.bio}</p>
      </div>
      <div className="shared-count">
        <Icon name="sparkle" size={15} />
        <strong>{person.shared} shared fandoms</strong>
      </div>
      <div className="interest-tags">
        {person.fandoms.map((fandom) => (
          <span key={fandom}>{fandom}</span>
        ))}
      </div>
      <div className="friend-actions">
        <Button variant="secondary" onClick={() => go("profile")}>
          View Profile
        </Button>
        <Button
          variant={followed ? "secondary" : "primary"}
          onClick={() => {
            setFollowed(!followed)
            toast(
              followed
                ? `Unfollowed ${person.name}`
                : `Following ${person.name}`,
            )
          }}
        >
          {followed ? "Following" : "Follow"}
        </Button>
        <Button variant="icon" icon="comment" onClick={() => go("messages")}>
          Message
        </Button>
      </div>
      <button
        className={connected ? "connect-action connected" : "connect-action"}
        onClick={() => {
          setConnected(!connected)
          toast(
            connected
              ? "Connection request withdrawn"
              : `Connection request sent to ${person.name}`,
          )
        }}
      >
        <Icon name={connected ? "check" : "people"} size={16} />
        {connected ? "Request sent" : "Connect"}
        <small>Mutual connection</small>
      </button>
    </article>
  )
}

function FindFriends({ go, toast = () => {} }: ScreenProps) {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("Shared Fandoms")
  const filters = [
    "Shared Fandoms",
    "Same Interests",
    "Gaming Buddies",
    "Anime Fans",
    "K-pop Fans",
    "Recently Active",
  ]
  const matches = people.filter((person) =>
    `${person.name} ${person.handle} ${person.fandoms.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  )
  return (
    <main className="page friends-page">
      <div className="friends-hero">
        <div>
          <Badge tone="cyan">
            <Icon name="people" size={14} /> SOCIAL DISCOVERY
          </Badge>
          <h1>
            Find Your <span>People.</span>
          </h1>
          <p>Meet fans who love the same things you do.</p>
        </div>
        <div className="match-score">
          <strong>24</strong>
          <span>
            great matches
            <br />
            active now
          </span>
        </div>
      </div>
      <div className="friend-search-row">
        <label className="search-box">
          <Icon name="search" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by username, fandom, or interest…"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <Icon name="close" size={17} />
            </button>
          )}
        </label>
        <label className="mini-select">
          Language
          <select>
            <option>Any language</option>
            <option>English</option>
            <option>Korean</option>
            <option>Spanish</option>
          </select>
        </label>
        <label className="mini-select">
          Status
          <select>
            <option>Anyone</option>
            <option>Online now</option>
          </select>
        </label>
      </div>
      <div className="filters social-filters">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "selected" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <SectionTitle
        eyebrow="CURATED FOR YOU"
        title={
          filter === "Gaming Buddies"
            ? "Find gaming buddies"
            : "Recommended for you"
        }
        action="Refresh matches"
      />
      {matches.length ? (
        <div className="friend-grid">
          {matches.slice(0, 3).map((person) => (
            <FriendCard
              key={person.handle}
              person={person}
              go={go}
              toast={toast}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>
            <Icon name="people" size={30} />
          </span>
          <h2>No matches yet</h2>
          <p>Try a different username, fandom, or interest.</p>
          <Button onClick={() => setQuery("")}>Clear search</Button>
        </div>
      )}
      <section className="friend-section">
        <SectionTitle
          eyebrow="YOUR FANDOM CIRCLE"
          title="People who share your fandoms"
          action="View all"
        />
        <div className="friend-grid">
          {people.slice(3, 6).map((person) => (
            <FriendCard
              key={person.handle}
              person={person}
              go={go}
              toast={toast}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

function Messages({ go, toast = () => {} }: ScreenProps) {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState("All")
  const [search, setSearch] = useState("")
  const [draft, setDraft] = useState("")
  const [sent, setSent] = useState<string[]>([])
  const [menu, setMenu] = useState(false)
  const conversations = [
    {
      person: people[0],
      preview: "That theory completely changed the episode for me.",
      time: "2m",
      unread: 2,
    },
    {
      person: people[1],
      preview: "Co-op tonight? I found the perfect build.",
      time: "18m",
      unread: 1,
    },
    {
      person: people[5],
      preview: "The new Monster High collection is unreal.",
      time: "1h",
      unread: 0,
    },
    {
      person: people[2],
      preview: "Sending you my reading list!",
      time: "Yesterday",
      unread: 0,
    },
  ]
  const visible = conversations.filter((conversation) => {
    const matches = conversation.person.name
      .toLowerCase()
      .includes(search.toLowerCase())
    return matches && (tab !== "Unread" || conversation.unread > 0)
  })
  const current = conversations[active]
  return (
    <main className="messages-page">
      <section className="conversation-panel">
        <div className="conversation-title">
          <div>
            <span>INBOX</span>
            <h1>Messages</h1>
          </div>
          <button
            onClick={() => toast("Choose someone from Find Friends")}
            aria-label="New message"
          >
            <Icon name="edit" />
          </button>
        </div>
        <label className="conversation-search">
          <Icon name="search" size={18} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search conversations…"
          />
        </label>
        <div className="message-tabs">
          {["All", "Unread", "Requests"].map((item) => (
            <button
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
              {item === "Requests" && <span>1</span>}
            </button>
          ))}
        </div>
        <div className="conversation-list">
          {visible.length ? (
            visible.map((conversation, index) => (
              <button
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                key={conversation.person.handle}
              >
                <span
                  className={`friend-avatar avatar-${conversation.person.tone}`}
                >
                  {conversation.person.initials}
                  {conversation.person.online && <i />}
                </span>
                <span className="conversation-copy">
                  <strong>
                    {conversation.person.name}
                    <small>{conversation.time}</small>
                  </strong>
                  <span>{conversation.preview}</span>
                </span>
                {conversation.unread > 0 && <b>{conversation.unread}</b>}
              </button>
            ))
          ) : (
            <div className="conversation-empty">
              <Icon name="search" />
              <strong>No conversations found</strong>
              <span>Try a different search.</span>
            </div>
          )}
        </div>
      </section>
      <section className="chat-panel">
        {tab === "Requests" && (
          <div className="request-notice">
            <Icon name="people" />
            <span>
              <strong>Message request</strong>You don’t follow this person yet.
              They won’t see read receipts until you accept.
            </span>
            <Button variant="secondary">Accept</Button>
          </div>
        )}
        <header className="chat-header">
          <button className="chat-person" onClick={() => go("profile")}>
            <span className={`friend-avatar avatar-${current.person.tone}`}>
              {current.person.initials}
              <i />
            </span>
            <span>
              <strong>{current.person.name}</strong>
              <small>Online now</small>
            </span>
          </button>
          <div>
            <button onClick={() => go("profile")} aria-label="View profile">
              <Icon name="user" />
            </button>
            <button
              onClick={() => setMenu(!menu)}
              aria-label="Conversation options"
            >
              <Icon name="more" />
            </button>
          </div>
          {menu && (
            <div className="chat-menu">
              <button
                onClick={() => {
                  toast("Conversation muted")
                  setMenu(false)
                }}
              >
                Mute conversation
              </button>
              <button
                onClick={() => {
                  toast("User blocked")
                  setMenu(false)
                }}
              >
                Block user
              </button>
              <button
                onClick={() => {
                  toast("Report received")
                  setMenu(false)
                }}
              >
                Report conversation
              </button>
            </div>
          )}
        </header>
        <div className="chat-body">
          <div className="chat-day">TODAY</div>
          <div className="bubble incoming">
            Did you see the new Infinity Castle trailer?<small>8:42 PM</small>
          </div>
          <div className="bubble outgoing">
            I watched it three times already. The animation is unreal.
            <small>8:44 PM · Read</small>
          </div>
          <div className="bubble incoming">
            Right? The lighting in that final scene gave me chills.
            <span>Loved · 2</span>
            <small>8:45 PM</small>
          </div>
          <div className="bubble incoming">
            We should join the community watch party on Friday.
            <small>8:46 PM</small>
          </div>
          {sent.map((message, index) => (
            <div className="bubble outgoing" key={`${message}-${index}`}>
              {message}
              <small>Now · Sent</small>
            </div>
          ))}
        </div>
        <div className="chat-composer">
          <button aria-label="Attach image">
            <Icon name="image" />
          </button>
          <button className="gif-button">GIF</button>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && draft.trim()) {
                setSent([...sent, draft])
                setDraft("")
                toast("Message sent")
              }
            }}
            placeholder="Write a message…"
          />
          <button aria-label="Add reaction">
            <Icon name="sparkle" />
          </button>
          <button
            className="send-message"
            aria-label="Send message"
            onClick={() => {
              if (draft.trim()) {
                setSent([...sent, draft])
                setDraft("")
                toast("Message sent")
              }
            }}
          >
            <Icon name="send" />
          </button>
        </div>
      </section>
      <aside className="chat-profile">
        <span
          className={`friend-avatar profile-chat-avatar avatar-${current.person.tone}`}
        >
          {current.person.initials}
          <i />
        </span>
        <h2>{current.person.name}</h2>
        <span>{current.person.handle}</span>
        <p>{current.person.bio}</p>
        <Button variant="secondary" onClick={() => go("profile")}>
          View Profile
        </Button>
        <div className="shared-profile">
          <small>YOU BOTH LOVE</small>
          {current.person.fandoms.map((fandom, index) => (
            <button key={fandom} onClick={() => go("details")}>
              <img src={fandoms[index % fandoms.length].image} alt="" />
              <span>
                <strong>{fandom}</strong>
                <small>Shared fandom</small>
              </span>
              <Icon name="chevron" size={15} />
            </button>
          ))}
        </div>
        <div className="privacy-note">
          <Icon name="bookmark" size={16} />
          Only share what feels comfortable. You can block or report anytime.
        </div>
      </aside>
    </main>
  )
}

function Profile({ go, toast = () => {} }: ScreenProps) {
  const [editing, setEditing] = useState(false)
  const [bio, setBio] = useState(
    "Collector of fictional worlds. Anime after dark, games until dawn, and always up for a wild theory.",
  )
  const [draft, setDraft] = useState(bio)
  const [tab, setTab] = useState("Collection")
  return (
    <main className="page profile-page">
      <section className="profile-cover">
        <div className="profile-pattern" />
        <div className="profile-info">
          <div className="profile-avatar">
            KY
            <span />
          </div>
          <div>
            <Badge tone="cyan">VERSE EXPLORER</Badge>
            <h1>Kai Yamada</h1>
            <span>@kaiverse · Joined March 2024</span>
          </div>
        </div>
        <Button
          variant="secondary"
          icon="edit"
          onClick={() => setEditing(true)}
        >
          Edit profile
        </Button>
      </section>
      <section className="profile-summary">
        <p>{bio}</p>
        <div>
          <span>
            <strong>18</strong>Fandoms
          </span>
          <span>
            <strong>2.8K</strong>Followers
          </span>
          <span>
            <strong>486</strong>Following
          </span>
        </div>
      </section>
      <div className="profile-tabs">
        {["Collection", "Activity", "Saved posts", "Communities"].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      <section className="profile-content">
        <SectionTitle
          eyebrow="PERSONAL FANDOM COLLECTION"
          title={`${tab} · 18 worlds`}
          action="Organize collection"
        />
        <div className="collection-grid">
          {fandoms.slice(0, 6).map((x, i) => (
            <article key={x.name} onClick={() => go("details")}>
              <img src={x.image} alt="" />
              <span>0{i + 1}</span>
              <div>
                <Badge tone={x.color}>{x.category}</Badge>
                <h3>{x.name}</h3>
                <p>{i % 2 ? "Currently exploring" : "All-time favorite"}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {editing && (
        <div className="modal-backdrop">
          <div className="edit-modal">
            <div className="modal-head">
              <div>
                <Badge tone="purple">PROFILE SETTINGS</Badge>
                <h2>Edit your identity</h2>
              </div>
              <button onClick={() => setEditing(false)}>
                <Icon name="close" />
              </button>
            </div>
            <label>
              Display name
              <input defaultValue="Kai Yamada" />
            </label>
            <label>
              Username
              <input defaultValue="@kaiverse" />
            </label>
            <label>
              Bio
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </label>
            <label className="toggle-row">
              Private profile
              <input type="checkbox" />
              <i />
            </label>
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setEditing(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setBio(draft)
                  setEditing(false)
                  toast("Profile updated")
                }}
              >
                Save changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Settings({ go }: ScreenProps) {
  const [section, setSection] = useState("Notifications")
  const [read, setRead] = useState(false)
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    Replies: true,
    Announcements: true,
    Recommendations: true,
    Digest: false,
    Motion: true,
    Contrast: false,
    Private: false,
  })
  const toggle = (x: string) => setToggles({ ...toggles, [x]: !toggles[x] })
  return (
    <main className="page settings-page">
      <div className="page-intro compact">
        <Badge tone="purple">YOUR CONTROL ROOM</Badge>
        <h1>Notifications & settings</h1>
        <p>Make FandomVerse work exactly the way you want it to.</p>
      </div>
      <div className="settings-layout">
        <aside>
          {[
            "Notifications",
            "Account",
            "Accessibility",
            "Privacy",
            "Appearance",
          ].map((x) => (
            <button
              className={section === x ? "active" : ""}
              onClick={() => setSection(x)}
              key={x}
            >
              <Icon
                name={
                  x === "Notifications"
                    ? "bell"
                    : x === "Accessibility"
                      ? "sparkle"
                      : x === "Privacy"
                        ? "bookmark"
                        : x === "Appearance"
                          ? "compass"
                          : "user"
                }
              />
              {x}
              <Icon name="chevron" size={16} />
            </button>
          ))}
          <button onClick={() => go("home")}>
            <Icon name="home" />
            Back to home
          </button>
        </aside>
        <section className="settings-panel">
          <div>
            <Badge tone="cyan">{section.toUpperCase()}</Badge>
            <h2>
              {section === "Notifications"
                ? "Stay in the loop, not overwhelmed."
                : `Your ${section.toLowerCase()} preferences.`}
            </h2>
            <p>Choose what reaches you and when. You’re always in control.</p>
            {section === "Notifications" && (
              <button className="mark-read" onClick={() => setRead(true)}>
                <Icon name="check" size={16} />
                {read ? "All caught up" : "Mark all as read"}
              </button>
            )}
          </div>
          {["Replies", "Announcements", "Recommendations", "Digest"].map(
            (x, i) => (
              <label className="setting-row" key={x}>
                <span className="setting-icon">
                  <Icon
                    name={
                      i === 0
                        ? "comment"
                        : i === 1
                          ? "bell"
                          : i === 2
                            ? "sparkle"
                            : "send"
                    }
                  />
                </span>
                <span>
                  <strong>
                    {x === "Replies"
                      ? "Replies & mentions"
                      : x === "Announcements"
                        ? "Community announcements"
                        : x === "Recommendations"
                          ? "New recommendations"
                          : "Weekly universe digest"}
                  </strong>
                  <small>
                    {i === 0
                      ? "When someone responds to your posts or mentions you."
                      : i === 1
                        ? "Important updates from communities you’ve joined."
                        : i === 2
                          ? "Fresh fandoms and content picked for your taste."
                          : "A weekly recap of everything you might have missed."}
                  </small>
                </span>
                <input
                  type="checkbox"
                  checked={!!toggles[x]}
                  onChange={() => toggle(x)}
                />
                <i />
              </label>
            ),
          )}
          <div className="notification-preview">
            <div className="setting-icon">
              <Icon name="comment" />
            </div>
            <div>
              <small>DEMON SLAYER · NOW</small>
              <strong>AkariNova replied to your theory</strong>
              <p>
                “Okay, but this actually changes how I read that entire scene…”
              </p>
            </div>
            {!read && <span className="unread" />}
          </div>
          <button
            className="notification-preview notification-button"
            onClick={() => go("messages")}
          >
            <div className="setting-icon">
              <Icon name="comment" />
            </div>
            <div>
              <small>NEW MESSAGE · 2M</small>
              <strong>Mina sent you a message</strong>
              <p>“That theory completely changed the episode for me.”</p>
            </div>
            {!read && <span className="unread" />}
          </button>
          <button
            className="notification-preview notification-button"
            onClick={() => go("friends")}
          >
            <div className="setting-icon">
              <Icon name="people" />
            </div>
            <div>
              <small>CONNECTION REQUEST · 18M</small>
              <strong>Noah Kim wants to connect</strong>
              <p>You share BTS, Arcane, and Monster High.</p>
            </div>
            {!read && <span className="unread" />}
          </button>
          <div className="permission-card">
            <span className="setting-icon">
              <Icon name="comment" />
            </span>
            <div>
              <strong>Who can message you?</strong>
              <small>
                Control new chats without limiting your discoveries.
              </small>
            </div>
            <select>
              <option>People I follow</option>
              <option>Connections only</option>
              <option>Everyone</option>
              <option>No one</option>
            </select>
          </div>
        </section>
      </div>
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [following, setFollowing] = useState<string[]>(["Arcane"])
  const [message, setMessage] = useState("")
  const go = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const onFollow = (name: string) => {
    setFollowing(
      following.includes(name)
        ? following.filter((x) => x !== name)
        : [...following, name],
    )
    notify(
      following.includes(name) ? `Unfollowed ${name}` : `Now following ${name}`,
    )
  }
  const notify = (s: string) => {
    setMessage(s)
    window.setTimeout(() => setMessage(""), 2400)
  }
  const props = { go, following, onFollow, toast: notify }
  return (
    <div className="app">
      <Header page={page} go={go} />
      {page === "home" && <Home {...props} />}{" "}
      {page === "explore" && <Explore {...props} />}{" "}
      {page === "details" && <Details {...props} />}{" "}
      {page === "community" && <Community {...props} />}{" "}
      {page === "onboarding" && <Onboarding {...props} />}{" "}
      {page === "discover" && <Discover {...props} />}{" "}
      {page === "friends" && <FindFriends {...props} />}{" "}
      {page === "messages" && <Messages {...props} />}{" "}
      {page === "profile" && <Profile {...props} />}{" "}
      {page === "settings" && <Settings {...props} />}
      <nav className="mobile-dock">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => go("home")}
        >
          <Icon name="home" />
          <span>Home</span>
        </button>
        <button
          className={page === "explore" ? "active" : ""}
          onClick={() => go("explore")}
        >
          <Icon name="compass" />
          <span>Explore</span>
        </button>
        <button
          className={page === "friends" ? "active" : ""}
          onClick={() => go("friends")}
        >
          <Icon name="people" />
          <span>Friends</span>
        </button>
        <button
          className={page === "messages" ? "active" : ""}
          onClick={() => go("messages")}
        >
          <Icon name="comment" />
          <span>Messages</span>
        </button>
        <button
          className={page === "profile" ? "active" : ""}
          onClick={() => go("profile")}
        >
          <Icon name="user" />
          <span>Profile</span>
        </button>
      </nav>
      {message && (
        <div className="toast">
          <Icon name="check" />
          {message}
        </div>
      )}
    </div>
  )
}

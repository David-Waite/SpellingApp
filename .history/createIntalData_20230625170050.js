export default async function createIntalData() {
  const newWordArray = [
    "the",
    "be",
    "and",
    "of",
    "to",
    "a",
    "in",
    "have",
    "it",
    "you",
    "he",
    "for",
    "they",
    "not",
    "that",
    "we",
    "on",
    "with",
    "this",
    "I",
    "do",
    "as",
    "at",
    "she",
    "but",
    "from",
    "by",
    "will",
    "or",
    "say",
    "go",
    "so",
    "all",
    "if",
    "one",
    "would",
    "about",
    "can",
    "which",
    "there",
    "know",
    "more",
    "get",
    "who",
    "like",
    "when",
    "think",
    "make",
    "time",
    "see",
    "what",
    "up",
    "some",
    "other",
    "out",
    "good",
    "people",
    "year",
    "take",
    "no",
    "well",
    "because",
    "very",
    "just",
    "come",
    "could",
    "work",
    "use",
    "than",
    "now",
    "then",
    "also",
    "into",
    "only",
    "look",
    "want",
    "give",
    "first",
    "new",
    "way",
    "find",
    "over",
    "any",
    "after",
    "day",
    "where",
    "thing",
    "most",
    "should",
    "need",
    "much",
    "right",
    "how",
    "back",
    "mean",
    "even",
    "may",
    "here",
    "many",
    "such",
    "last",
    "child",
    "tell",
    "really",
    "call",
    "before",
    "company",
    "through",
    "down",
    "show",
    "life",
    "man",
    "change",
    "place",
    "long",
    "between",
    "feel",
    "too",
    "still",
    "problem",
    "write",
    "same",
    "lot",
    "great",
    "try",
    "leave",
    "number",
    "both",
    "own",
    "part",
    "point",
    "little",
    "help",
    "ask",
    "meet",
    "start",
    "talk",
    "something",
    "put",
    "another",
    "become",
    "interest",
    "country",
    "old",
    "each",
    "school",
    "late",
    "high",
    "different",
    "off",
    "next",
    "end",
    "live",
    "why",
    "while",
    "world",
    "week",
    "play",
    "might",
    "must",
    "home",
    "never",
    "include",
    "course",
    "house",
    "report",
    "group",
    "case",
    "woman",
    "around",
    "book",
    "family",
    "seem",
    "let",
    "again",
    "kind",
    "keep",
    "hear",
    "system",
    "every",
    "question",
    "during",
    "always",
    "big",
    "set",
    "small",
    "study",
    "follow",
    "begin",
    "important",
    "since",
    "run",
    "under",
    "turn",
    "few",
    "bring",
    "early",
    "hand",
    "state",
    "move",
    "money",
    "fact",
    "however",
    "area",
    "provide",
    "name",
    "read",
    "friend",
    "month",
    "large",
    "business",
    "without",
    "information",
    "open",
    "order",
    "government",
    "word",
    "issue",
    "market",
    "pay",
    "build",
    "hold",
    "service",
    "against",
    "believe",
    "second",
    "though",
    "yes",
    "love",
    "increase",
    "job",
    "plan",
    "result",
    "away",
    "example",
    "happen",
    "offer",
    "young",
    "close",
    "program",
    "lead",
    "buy",
    "understand",
    "thank",
    "far",
    "today",
    "hour",
    "student",
    "face",
    "hope",
    "idea",
    "cost",
    "less",
    "room",
    "until",
    "reason",
    "form",
    "spend",
    "head",
    "car",
    "learn",
    "level",
    "person",
    "experience",
    "once",
    "member",
    "enough",
    "bad",
    "city",
    "night",
    "able",
    "support",
    "whether",
    "line",
    "present",
    "side",
    "quite",
    "although",
    "sure",
    "term",
    "least",
    "age",
    "low",
    "speak",
    "within",
    "process",
    "public",
    "often",
    "train",
    "possible",
    "actually",
    "rather",
    "view",
    "together",
    "consider",
    "price",
    "parent",
    "hard",
    "party",
    "local",
    "control",
    "already",
    "concern",
    "product",
    "lose",
    "story",
    "almost",
    "continue",
    "stand",
    "whole",
    "yet",
    "rate",
    "care",
    "expect",
    "effect",
    "sort",
    "ever",
    "anything",
    "cause",
    "fall",
    "deal",
    "water",
    "send",
    "allow",
    "soon",
    "watch",
    "base",
    "probably",
    "suggest",
    "past",
    "power",
    "test",
    "visit",
    "center",
    "grow",
    "nothing",
    "return",
    "mother",
    "walk",
    "matter",
    "mind",
    "value",
    "office",
    "record",
    "stay",
    "force",
    "stop",
    "several",
    "light",
    "develop",
    "remember",
    "bit",
    "share",
    "real",
    "answer",
    "sit",
    "figure",
    "letter",
    "decide",
    "language",
    "subject",
    "class",
    "development",
    "town",
    "half",
    "minute",
    "food",
    "break",
    "clear",
    "future",
    "either",
    "ago",
    "per",
    "remain",
    "top",
    "among",
    "win",
    "color",
    "involve",
    "reach",
    "social",
    "period",
    "across",
    "note",
    "history",
    "create",
    "drive",
    "along",
    "type",
    "sound",
    "eye",
    "music",
    "game",
    "political",
    "free",
    "receive",
    "moment",
    "sale",
    "policy",
    "further",
    "body",
    "require",
    "wait",
    "general",
    "appear",
    "toward",
    "team",
    "easy",
    "individual",
    "full",
    "black",
    "sense",
    "perhaps",
    "add",
    "rule",
    "pass",
    "produce",
    "sell",
    "short",
    "agree",
    "law",
    "everything",
    "research",
    "cover",
    "paper",
    "position",
    "near",
    "human",
    "computer",
    "situation",
    "staff",
    "activity",
    "film",
    "morning",
    "war",
    "account",
    "shop",
    "major",
    "someone",
    "above",
    "design",
    "event",
    "special",
    "sometimes",
    "condition",
    "carry",
    "choose",
    "father",
    "decision",
    "table",
    "certain",
    "forward",
    "main",
    "die",
    "bear",
    "cut",
    "describe",
    "himself",
    "available",
    "especially",
    "strong",
    "rise",
    "girl",
    "maybe",
    "community",
    "else",
    "particular",
    "role",
    "join",
    "difficult",
    "please",
    "detail",
    "difference",
    "action",
    "health",
    "eat",
    "step",
    "TRUE",
    "phone",
    "themselves",
    "draw",
    "white",
    "date",
    "practice",
    "model",
    "raise",
    "customer",
    "front",
    "explain",
    "door",
    "outside",
    "behind",
    "economic",
    "site",
    "approach",
    "teacher",
    "land",
    "charge",
    "finally",
    "sign",
    "claim",
    "relationship",
    "travel",
    "enjoy",
    "death",
    "nice",
    "amount",
    "improve",
    "picture",
    "boy",
    "regard",
    "organization",
    "happy",
    "couple",
    "act",
    "range",
    "quality",
    "project",
    "round",
    "opportunity",
    "road",
    "accord",
    "list",
    "wish",
    "therefore",
    "wear",
    "fund",
    "rest",
    "kid",
    "industry",
    "education",
    "measure",
    "kill",
    "serve",
    "likely",
    "certainly",
    "national",
    "itself",
    "teach",
    "field",
    "security",
    "air",
    "benefit",
    "trade",
    "risk",
    "news",
    "standard",
    "vote",
    "percent",
    "focus",
    "stage",
    "space",
    "instead",
    "realize",
    "usually",
    "data",
    "single",
    "address",
    "performance",
    "chance",
    "accept",
    "society",
    "technology",
    "mention",
    "choice",
    "save",
    "common",
    "culture",
    "total",
    "demand",
    "material",
    "limit",
    "listen",
    "due",
    "wrong",
    "foot",
    "effort",
    "attention",
    "upon",
    "check",
    "complete",
    "lie",
    "pick",
    "reduce",
    "personal",
    "ground",
    "animal",
    "arrive",
    "patient",
    "current",
    "century",
    "evidence",
    "exist",
    "similar",
    "fight",
    "leader",
    "fine",
    "street",
    "former",
    "contact",
    "particularly",
    "wife",
    "sport",
    "prepare",
    "discuss",
    "response",
    "voice",
    "piece",
    "finish",
    "suppose",
    "apply",
    "president",
    "fire",
    "compare",
    "court",
    "police",
    "store",
    "poor",
    "knowledge",
    "laugh",
    "arm",
    "heart",
    "source",
    "employee",
    "manage",
    "simply",
    "bank",
    "firm",
    "cell",
    "article",
    "fast",
    "attack",
    "foreign",
    "surprise",
    "feature",
    "factor",
    "pretty",
    "recently",
    "affect",
    "drop",
    "recent",
    "relate",
    "official",
    "financial",
    "miss",
    "art",
    "campaign",
    "private",
    "pause",
    "everyone",
    "forget",
    "page",
    "worry",
    "summer",
    "drink",
    "opinion",
    "park",
    "represent",
    "key",
    "inside",
    "manager",
    "international",
    "contain",
    "notice",
    "wonder",
    "nature",
    "structure",
    "section",
    "myself",
    "exactly",
    "plant",
    "paint",
    "worker",
    "press",
    "whatever",
    "necessary",
    "region",
    "growth",
    "evening",
    "influence",
    "respect",
    "various",
    "catch",
    "thus",
    "skill",
    "attempt",
    "son",
    "simple",
    "medium",
    "average",
    "stock",
    "management",
    "character",
    "bed",
    "hit",
    "establish",
    "indeed",
    "final",
    "economy",
    "fit",
    "guy",
    "function",
    "yesterday",
    "image",
    "size",
    "behavior",
    "addition",
    "determine",
    "station",
    "population",
    "fail",
    "environment",
    "production",
    "contract",
    "player",
    "comment",
    "enter",
    "occur",
    "alone",
    "significant",
    "drug",
    "wall",
    "series",
    "direct",
    "success",
    "tomorrow",
    "director",
    "clearly",
    "lack",
    "review",
    "depend",
    "race",
    "recognize",
    "window",
    "purpose",
    "department",
    "gain",
    "tree",
    "college",
    "argue",
    "board",
    "holiday",
    "mark",
    "church",
    "machine",
    "achieve",
    "item",
    "prove",
    "cent",
    "season",
    "floor",
    "stuff",
    "wide",
    "anyone",
    "method",
    "analysis",
    "election",
    "military",
    "hotel",
    "club",
    "below",
    "movie",
    "doctor",
    "discussion",
    "sorry",
    "challenge",
    "nation",
    "nearly",
    "statement",
    "link",
    "despite",
    "introduce",
    "advantage",
    "ready",
    "marry",
    "strike",
    "mile",
    "seek",
    "ability",
    "unit",
    "card",
    "hospital",
    "quickly",
    "interview",
    "agreement",
    "release",
    "tax",
    "solution",
    "capital",
    "popular",
    "specific",
    "beautiful",
    "fear",
    "aim",
    "television",
    "serious",
    "target",
    "degree",
    "pull",
    "red",
    "husband",
    "access",
    "movement",
    "treat",
    "identify",
    "loss",
    "shall",
    "modern",
    "pressure",
    "bus",
    "treatment",
    "conference",
    "yourself",
    "supply",
    "village",
    "worth",
    "natural",
    "express",
    "indicate",
    "attend",
    "brother",
    "investment",
    "score",
    "organize",
    "trip",
    "beyond",
    "sleep",
    "fish",
    "promise",
    "potential",
    "energy",
    "trouble",
    "relation",
    "touch",
    "file",
    "middle",
    "bar",
    "suffer",
    "strategy",
    "deep",
    "except",
    "clean",
    "tend",
    "advance",
    "fill",
    "star",
    "network",
    "generally",
    "operation",
    "match",
    "avoid",
    "seat",
    "throw",
    "task",
    "normal",
    "goal",
    "associate",
    "blue",
    "positive",
    "option",
    "box",
    "huge",
    "message",
    "instance",
    "style",
    "refer",
    "cold",
    "push",
    "quarter",
    "assume",
    "baby",
    "successful",
    "sing",
    "doubt",
    "competition",
    "theory",
    "propose",
    "reference",
    "argument",
    "adult",
    "fly",
    "document",
    "pattern",
    "application",
    "hot",
    "obviously",
    "unclear",
    "bill",
    "search",
    "separate",
    "central",
    "career",
    "anyway",
    "speech",
    "dog",
    "officer",
    "throughout",
    "oil",
    "dress",
    "profit",
    "guess",
    "fun",
    "protect",
    "resource",
    "science",
    "disease",
    "balance",
    "damage",
    "basis",
    "author",
    "basic",
    "encourage",
    "hair",
    "male",
    "operate",
    "reflect",
    "exercise",
    "useful",
    "restaurant",
    "income",
    "property",
    "previous",
    "dark",
    "imagine",
    "okay",
    "earn",
    "daughter",
    "post",
    "newspaper",
    "define",
    "conclusion",
    "clock",
    "everybody",
    "weekend",
    "perform",
    "professional",
    "mine",
    "debate",
    "memory",
    "green",
    "song",
    "object",
    "maintain",
    "credit",
    "ring",
    "discover",
    "dead",
    "afternoon",
    "prefer",
    "extend",
    "possibility",
    "direction",
    "facility",
    "variety",
    "daily",
    "clothes",
    "screen",
    "track",
    "dance",
    "completely",
    "female",
    "responsibility",
    "original",
    "sister",
    "rock",
    "dream",
    "nor",
    "university",
    "easily",
    "agency",
    "dollar",
    "garden",
    "fix",
    "ahead",
    "cross",
    "yeah",
    "candidate",
    "weight",
    "legal",
    "proposal",
    "version",
    "conversation",
    "somebody",
    "pound",
    "magazine",
    "shape",
    "sea",
    "immediately",
    "welcome",
    "smile",
    "communication",
    "agent",
    "traditional",
    "replace",
    "judge",
    "herself",
    "suddenly",
    "generation",
    "estimate",
    "favorite",
    "difficulty",
    "purchase",
    "shoot",
    "announce",
    "unless",
    "independent",
    "recommend",
    "survey",
    "majority",
    "stick",
    "request",
    "rich",
    "wind",
    "none",
    "exchange",
    "budget",
    "famous",
    "blood",
    "appropriate",
    "block",
    "warm",
    "count",
    "scene",
    "writer",
    "content",
    "prevent",
    "safe",
    "invite",
    "mix",
    "element",
    "effective",
    "correct",
    "medical",
    "admit",
    "beat",
    "telephone",
    "copy",
    "committee",
    "aware",
    "advice",
    "handle",
    "glass",
    "trial",
    "stress",
    "radio",
    "administration",
    "complex",
    "text",
    "context",
    "ride",
    "directly",
    "heavy",
    "remove",
    "conduct",
    "equipment",
    "otherwise",
    "title",
    "extra",
    "executive",
    "chair",
    "expensive",
    "sample",
    "sex",
    "deliver",
    "video",
    "connection",
    "primary",
    "weather",
    "collect",
    "inform",
    "principle",
    "straight",
    "appeal",
    "highly",
    "trust",
    "wonderful",
    "flat",
    "absolutely",
    "flow",
    "fair",
    "additional",
    "responsible",
    "farm",
    "collection",
    "hang",
    "negative",
    "band",
    "relative",
    "tour",
    "alternative",
    "software",
    "pair",
    "ship",
    "attitude",
    "cheap",
    "double",
    "leg",
    "observe",
    "sentence",
    "print",
    "progress",
    "truth",
    "nobody",
    "examine",
    "lay",
    "speed",
    "politics",
    "reply",
    "display",
    "transfer",
    "perfect",
    "slightly",
    "overall",
    "intend",
    "user",
    "respond",
    "dinner",
    "slow",
    "regular",
    "physical",
    "apart",
    "suit",
    "federal",
    "reveal",
    "percentage",
    "peace",
    "status",
    "crime",
    "decline",
    "decade",
    "launch",
    "warn",
    "consumer",
    "favor",
    "dry",
    "partner",
    "institution",
    "spot",
    "horse",
    "eventually",
    "heat",
    "excite",
    "reader",
    "importance",
    "distance",
    "guide",
    "grant",
    "taxi",
    "feed",
    "pain",
    "sector",
    "mistake",
    "ensure",
    "satisfy",
    "chief",
    "cool",
    "expert",
    "wave",
    "south",
    "labor",
    "surface",
    "library",
    "excellent",
    "edge",
    "camp",
    "audience",
    "lift",
    "procedure",
    "email",
    "global",
    "struggle",
    "advertise",
    "select",
    "surround",
    "extent",
    "river",
    "annual",
    "fully",
    "contrast",
    "roll",
    "reality",
    "photograph",
    "artist",
    "conflict",
    "entire",
    "presence",
    "crowd",
    "corner",
    "gas",
    "shift",
    "net",
    "category",
    "secretary",
    "defense",
    "quick",
    "cook",
    "spread",
    "nuclear",
    "scale",
    "driver",
    "ball",
    "cry",
    "introduction",
    "requirement",
    "north",
    "confirm",
    "senior",
    "photo",
    "refuse",
    "transport",
    "emerge",
    "map",
    "concept",
    "island",
    "reform",
    "neither",
    "football",
    "survive",
    "flight",
    "left",
    "solve",
    "neighbor",
    "background",
    "technique",
    "traffic",
    "improvement",
    "tool",
    "consequence",
    "circumstance",
    "smoke",
    "reaction",
    "rain",
    "busy",
    "lesson",
    "brain",
    "mass",
    "funny",
    "contribute",
    "failure",
    "schedule",
    "speaker",
    "bottom",
    "adopt",
    "combine",
    "mountain",
    "waste",
    "hide",
    "marriage",
    "ticket",
    "meal",
    "colleague",
    "bag",
    "repeat",
    "equal",
    "expression",
    "plus",
    "extremely",
    "owner",
    "plane",
    "commercial",
    "lady",
    "duty",
    "strength",
    "connect",
    "cultural",
    "arrange",
    "scheme",
    "payment",
    "unfortunately",
    "brief",
    "bird",
    "demonstrate",
    "contribution",
    "appreciate",
    "chapter",
    "secret",
    "apparently",
    "novel",
    "union",
    "burn",
    "trend",
    "initial",
    "pleasure",
    "suggestion",
    "critical",
    "gather",
    "mostly",
    "earth",
    "pop",
    "essential",
    "desire",
    "promote",
    "currently",
    "employ",
    "path",
    "topic",
    "beach",
    "attract",
    "engage",
    "powerful",
    "flower",
    "crisis",
    "settle",
    "boat",
    "aid",
    "fan",
    "kitchen",
    "twice",
    "fresh",
    "delay",
    "safety",
    "engineer",
    "quiet",
    "insurance",
    "nurse",
    "divide",
    "length",
    "investigation",
    "package",
    "somewhere",
    "expand",
    "commit",
    "obvious",
    "jump",
    "weapon",
    "relatively",
    "host",
    "winter",
    "district",
    "broad",
    "tire",
    "spring",
    "spirit",
    "lunch",
    "actual",
    "pool",
    "battle",
    "tradition",
    "cash",
    "hardly",
    "award",
    "coach",
    "experiment",
    "consideration",
    "strange",
    "code",
    "possibly",
    "threat",
    "accident",
    "impossible",
    "revenue",
    "enable",
    "afraid",
    "active",
    "conclude",
    "religious",
    "cancer",
    "convince",
    "vary",
    "environmental",
    "sun",
    "healthy",
    "blow",
    "volume",
    "location",
    "invest",
    "proceed",
    "wash",
    "actor",
    "glad",
    "tape",
    "whereas",
    "opposite",
    "stone",
    "sum",
    "murder",
    "monitor",
    "soldier",
    "finance",
    "hate",
    "egg",
    "concert",
    "shock",
    "comfortable",
    "usual",
    "carefully",
    "pack",
    "recall",
    "wine",
    "camera",
    "swim",
    "manufacture",
    "theater",
    "cycle",
    "coffee",
    "totally",
    "museum",
    "visitor",
    "freedom",
    "construction",
    "dear",
    "objective",
    "moreover",
    "onto",
    "historical",
    "oppose",
    "branch",
    "vehicle",
    "scientist",
    "route",
    "bind",
    "belong",
    "taste",
    "tonight",
    "fashion",
    "danger",
    "bomb",
    "army",
    "dangerous",
    "decrease",
    "hurt",
    "council",
    "editor",
    "normally",
    "sight",
    "generate",
    "gift",
    "delivery",
    "deny",
    "guest",
    "anybody",
    "bedroom",
    "quote",
    "climb",
    "basically",
    "violence",
    "minister",
    "mainly",
    "mouth",
    "noise",
    "manner",
    "gun",
    "square",
    "occasion",
    "familiar",
    "ignore",
    "destroy",
    "affair",
    "civil",
    "locate",
    "citizen",
    "temperature",
    "gold",
    "domestic",
    "load",
    "belief",
    "troop",
    "technical",
    "remind",
    "arrangement",
    "skin",
    "prison",
    "switch",
    "acquire",
    "corporate",
    "fairly",
    "wood",
    "participate",
    "tough",
    "tear",
    "representative",
    "capacity",
    "border",
    "shake",
    "assessment",
    "shoe",
    "ought",
    "ad",
    "fee",
    "hall",
    "regulation",
    "escape",
    "studio",
    "proper",
    "relax",
    "tourist",
    "component",
    "afford",
    "lawyer",
    "suspect",
    "cup",
    "description",
    "confidence",
    "industrial",
    "complain",
    "perspective",
    "error",
    "arrest",
    "assess",
    "register",
    "asset",
    "signal",
    "finger",
    "relevant",
    "explore",
    "leadership",
    "commitment",
    "wake",
    "necessarily",
    "bright",
    "frame",
    "slowly",
    "bond",
    "hire",
    "hole",
    "tie",
    "internal",
    "chain",
    "literature",
    "victim",
    "threaten",
    "division",
    "secure",
    "amaze",
    "device",
    "birth",
    "forest",
    "label",
    "root",
    "factory",
    "expense",
    "channel",
    "investigate",
    "recommendation",
    "rank",
    "typical",
    "west",
    "friendly",
    "resident",
    "provision",
    "concentrate",
    "plenty",
    "export",
    "entirely",
    "strongly",
    "bridge",
    "consist",
    "graduate",
    "brand",
    "moral",
    "insist",
    "combination",
    "abuse",
    "ice",
    "principal",
    "master",
    "definitely",
    "session",
    "grade",
    "nevertheless",
    "predict",
    "previously",
    "protection",
    "largely",
    "wed",
    "rent",
    "shot",
    "appearance",
    "reasonable",
    "guarantee",
    "till",
    "theme",
    "judgment",
    "odd",
    "approve",
    "loan",
    "definition",
    "elect",
    "atmosphere",
    "farmer",
    "comparison",
    "characteristic",
    "license",
    "rely",
    "narrow",
    "succeed",
    "identity",
    "desk",
    "permit",
    "seriously",
    "wild",
    "empty",
    "commission",
    "unique",
    "association",
    "instrument",
    "investor",
    "practical",
    "tea",
    "lovely",
    "soft",
    "row",
    "youth",
    "lock",
    "fuel",
    "expectation",
    "employment",
    "celebrate",
    "sexual",
    "shoulder",
    "breath",
    "increasingly",
    "import",
    "bottle",
    "ourselves",
    "sheet",
    "engine",
    "cast",
    "notion",
    "conservative",
    "journey",
    "opposition",
    "relief",
    "debt",
    "honor",
    "outcome",
    "blame",
    "explanation",
    "arise",
    "musical",
    "recover",
    "dad",
    "stretch",
    "declare",
    "retire",
    "tiny",
    "careful",
    "suitable",
    "native",
    "fruit",
    "analyze",
    "witness",
    "mail",
    "terrible",
    "researcher",
    "ordinary",
    "selection",
    "anywhere",
    "mental",
    "participant",
    "vision",
    "personality",
    "specifically",
    "fat",
    "entry",
    "fellow",
    "chemical",
    "capture",
    "tip",
    "discount",
    "peak",
    "chairman",
    "proportion",
    "ear",
    "disappear",
    "shout",
    "yard",
    "constant",
    "significantly",
    "hill",
    "considerable",
    "instruction",
    "intelligence",
    "ideal",
    "folk",
    "surely",
    "guard",
    "cat",
    "somewhat",
    "kiss",
    "presentation",
    "joint",
    "compete",
    "poll",
    "weak",
    "faith",
    "reduction",
    "reserve",
    "complaint",
    "bore",
    "mission",
    "somehow",
    "tone",
    "neighborhood",
    "passenger",
    "justice",
    "phase",
    "thin",
    "rush",
    "formal",
    "religion",
    "employer",
    "reject",
    "latter",
    "plate",
    "ban",
    "steal",
    "protest",
    "index",
    "sad",
    "frequently",
    "circle",
    "helpful",
    "command",
    "attractive",
    "sick",
    "impression",
    "unable",
    "joke",
    "sky",
    "column",
    "electronic",
    "impose",
    "criminal",
    "besides",
    "properly",
    "ancient",
    "coast",
    "ill",
    "kick",
    "closely",
    "multiple",
    "yield",
    "via",
    "legislation",
    "county",
    "unlike",
    "mobile",
    "assistant",
    "implement",
    "chart",
    "attach",
    "hell",
    "everywhere",
    "advise",
    "household",
    "acknowledge",
    "reward",
    "east",
    "hat",
    "academic",
    "voter",
    "meanwhile",
    "furthermore",
    "accuse",
    "scientific",
    "wage",
    "absence",
    "construct",
    "remark",
    "medicine",
    "professor",
    "rare",
    "intention",
    "dozen",
    "settlement",
    "gap",
    "widely",
    "minimum",
    "northern",
    "estate",
    "equally",
    "expose",
    "alive",
    "shut",
    "victory",
    "resolve",
    "critic",
    "variable",
    "enormous",
    "sweet",
    "permanent",
    "emotion",
    "pursue",
    "tall",
    "urge",
    "enemy",
    "appoint",
    "milk",
    "talent",
    "smell",
    "prior",
    "priority",
    "online",
    "phrase",
    "pilot",
    "stable",
    "merely",
    "resolution",
    "communicate",
    "injury",
    "vast",
    "exhibition",
    "producer",
    "regional",
    "immediate",
    "incident",
    "childhood",
    "draft",
    "slip",
    "accompany",
    "politician",
    "angry",
    "knock",
    "seed",
    "salary",
    "illustrate",
    "imply",
    "breakfast",
    "temporary",
    "liberal",
    "lake",
    "qualify",
    "competitive",
    "truly",
    "hi",
    "yellow",
    "habit",
    "disk",
    "core",
    "emotional",
    "aircraft",
    "self",
    "metal",
    "existence",
    "bone",
    "panel",
    "prime",
    "appointment",
    "emphasize",
    "maximum",
    "effectively",
    "elsewhere",
    "bother",
    "initiative",
    "sharp",
    "diet",
    "motion",
    "gray",
    "plastic",
    "complicate",
    "discipline",
    "disappoint",
    "boss",
    "assumption",
    "freeze",
    "extreme",
    "passage",
    "reputation",
    "forth",
    "negotiation",
    "mechanism",
    "coat",
    "democracy",
    "pocket",
    "lucky",
    "crash",
    "observation",
    "meat",
    "concentration",
    "implication",
    "deserve",
    "unusual",
    "defend",
    "classic",
    "king",
    "interaction",
    "repair",
    "collapse",
    "borrow",
    "fundamental",
    "dish",
    "abroad",
    "soul",
    "capable",
    "defeat",
    "presidential",
    "perfectly",
    "enhance",
    "proud",
    "emergency",
    "educational",
    "distinguish",
    "substantial",
    "nearby",
    "manufacturer",
    "slide",
    "valuable",
    "personally",
    "breast",
    "cope",
    "approximately",
    "accommodation",
    "highlight",
    "reporter",
    "climate",
    "shirt",
    "exception",
    "corporation",
    "chip",
    "winner",
    "encounter",
    "brown",
    "breathe",
    "excuse",
    "partly",
    "tennis",
    "urban",
    "confuse",
    "southern",
    "output",
    "beauty",
    "massive",
    "install",
    "calculate",
    "mouse",
    "mathematics",
    "upper",
    "creation",
    "occupy",
    "outline",
    "sufficient",
    "update",
    "luck",
    "preserve",
    "split",
    "swing",
    "illness",
    "journalist",
    "sudden",
    "advertisement",
    "consistent",
    "originally",
    "aside",
    "comfort",
    "secondly",
    "severe",
    "gene",
    "prospect",
    "snow",
    "plot",
    "neck",
    "criteria",
    "primarily",
    "integrate",
    "criticism",
    "convention",
    "bet",
    "retain",
    "sequence",
    "plain",
    "volunteer",
    "rural",
    "calm",
    "abandon",
    "examination",
    "silence",
    "rapidly",
    "efficient",
    "revolution",
    "delight",
    "spell",
    "premise",
    "lean",
    "dramatic",
    "differ",
    "grateful",
    "protein",
    "bike",
    "distribute",
    "intellectual",
    "derive",
    "crucial",
    "unemployment",
    "wheel",
    "crop",
    "minority",
    "origin",
    "interpretation",
    "gentleman",
    "drama",
    "landscape",
    "educate",
    "toy",
    "fault",
    "exhibit",
    "minor",
    "hunt",
    "storm",
    "thick",
    "achievement",
    "negotiate",
    "dominate",
    "supplier",
    "prize",
    "typically",
    "peer",
    "pension",
    "wing",
    "acquisition",
    "laughter",
    "deeply",
    "recognition",
    "electricity",
    "assistance",
    "roof",
    "retirement",
    "respectively",
    "variation",
    "ultimately",
    "proof",
    "soil",
    "smart",
    "layer",
    "upset",
    "tooth",
    "representation",
    "preparation",
    "dispute",
    "agenda",
    "emphasis",
    "edition",
    "silver",
    "entertainment",
    "honest",
    "undertake",
    "retail",
    "wire",
    "unlikely",
    "gay",
    "publication",
    "slight",
    "unknown",
    "framework",
    "zone",
    "restrict",
    "trace",
    "inch",
    "equivalent",
    "solid",
    "enterprise",
    "elderly",
    "owe",
    "governor",
    "uniform",
    "port",
    "pitch",
    "arrival",
    "contemporary",
    "gate",
    "ease",
    "beer",
    "specialist",
    "assure",
    "profile",
    "mood",
    "episode",
    "crack",
    "numerous",
    "submit",
    "symptom",
    "virtually",
    "era",
    "coverage",
    "tension",
    "cable",
    "sensitive",
    "nervous",
    "input",
    "isolate",
    "prisoner",
    "eliminate",
    "tight",
    "wet",
    "secondary",
    "welfare",
    "recruit",
    "exclude",
    "string",
    "cloud",
    "persuade",
    "inspire",
    "grand",
    "hence",
    "crew",
    "phenomenon",
    "pupil",
    "FALSE",
    "assist",
    "restore",
    "formula",
    "alter",
    "perceive",
    "routine",
    "sink",
    "stare",
    "anymore",
    "hero",
    "supporter",
    "convert",
    "steady",
    "meter",
    "truck",
    "nose",
    "beside",
    "sail",
    "disaster",
    "pace",
    "heavily",
    "devote",
    "terrorist",
    "justify",
    "vital",
    "fascinate",
    "external",
    "spare",
    "whenever",
    "depression",
    "guilty",
    "underlie",
    "mom",
    "distinction",
    "satisfaction",
    "incorporate",
    "pour",
    "sweep",
    "obligation",
    "sir",
    "evaluate",
    "anger",
    "pub",
    "perception",
    "naturally",
    "currency",
    "database",
    "initially",
    "territory",
    "stream",
    "rarely",
    "height",
    "apparent",
    "western",
    "expansion",
    "constantly",
    "muscle",
    "scare",
    "badly",
    "everyday",
    "boundary",
    "ratio",
    "essay",
    "scream",
    "withdraw",
    "pollution",
    "disorder",
    "furniture",
    "symbol",
    "apartment",
    "demonstration",
    "analyst",
    "platform",
    "steel",
    "cake",
    "transform",
    "wound",
    "restriction",
    "foundation",
    "designer",
    "strain",
    "innovation",
    "album",
    "singer",
    "trail",
    "trap",
    "loose",
    "extension",
    "wealth",
    "gradually",
    "tank",
    "evil",
    "remarkable",
    "tune",
    "grass",
    "invitation",
    "transition",
    "frighten",
    "bid",
    "breed",
    "extraordinary",
    "brilliant",
    "adviser",
    "stem",
    "reverse",
    "mode",
    "mirror",
    "awful",
    "pose",
    "adjust",
    "creative",
    "nowadays",
    "poem",
    "agricultural",
    "competitor",
    "alcohol",
    "festival",
    "vegetable",
    "van",
    "confident",
    "planet",
    "curve",
    "knee",
    "overcome",
    "web",
    "depth",
    "entrance",
    "log",
    "giant",
    "god",
    "portion",
    "substance",
    "extensive",
    "interpret",
    "independence",
    "sugar",
    "inner",
    "harm",
    "consult",
    "pink",
    "shadow",
    "strip",
    "smooth",
    "intervention",
    "impress",
    "exam",
    "vice",
    "radical",
    "similarly",
    "behave",
    "loud",
    "dimension",
    "subsequent",
    "infection",
    "jacket",
    "efficiency",
    "dirty",
    "statistic",
    "regularly",
    "resort",
    "iron",
    "broadcast",
    "membership",
    "bread",
    "blind",
    "pure",
    "bloody",
    "ally",
    "quantity",
    "bend",
    "mature",
    "briefly",
    "alarm",
    "disturb",
    "sustain",
    "flood",
    "poverty",
    "crazy",
    "cite",
    "newly",
    "parallel",
    "gender",
    "sponsor",
    "boot",
    "accurate",
    "dealer",
    "button",
    "burden",
    "desert",
    "mate",
    "occasionally",
    "shareholder",
    "bowl",
    "discovery",
    "resistance",
    "bath",
    "frequency",
    "criticize",
    "tap",
    "philosophy",
    "lip",
    "attribute",
    "apologize",
    "approval",
    "grab",
    "entitle",
    "lend",
    "involvement",
    "exposure",
    "conventional",
    "digital",
    "translate",
    "edit",
    "formation",
    "deposit",
    "pleasant",
    "overseas",
    "advocate",
    "establishment",
    "summary",
    "rough",
    "pen",
    "recovery",
    "seal",
    "tube",
    "tower",
    "characterize",
    "specify",
    "exact",
    "spin",
    "operator",
    "infant",
    "dig",
    "drag",
    "mount",
    "wrap",
    "anticipate",
    "dependent",
    "specialize",
    "angle",
    "chicken",
    "anxiety",
    "virus",
    "precisely",
    "rival",
    "offense",
    "detect",
    "teenager",
    "admire",
    "moderate",
    "surgery",
    "musician",
    "significance",
    "shower",
    "illegal",
    "charity",
    "universal",
    "cigarette",
    "constitute",
    "adequate",
    "consultant",
    "historian",
    "cousin",
    "visual",
    "stupid",
    "keen",
    "ethnic",
    "twin",
    "clinical",
    "eastern",
    "forecast",
    "segment",
    "custom",
    "adapt",
    "sand",
    "cap",
    "prompt",
    "charm",
    "react",
    "lecture",
    "venture",
    "compound",
    "rescue",
    "mess",
    "preference",
    "comprehensive",
    "incentive",
    "league",
    "dialog",
    "cream",
    "rapid",
    "cancel",
    "regret",
    "dismiss",
    "margin",
    "beneath",
    "opponent",
    "resist",
    "capability",
    "absolute",
    "correspond",
    "stroke",
    "dare",
    "barrier",
    "rid",
    "divorce",
    "ruin",
    "bury",
    "counsel",
    "tendency",
    "frequent",
    "motor",
    "survival",
    "counter",
    "possess",
    "permission",
    "valley",
    "float",
    "mad",
    "greatly",
    "visible",
    "electric",
    "impressive",
    "evolution",
    "awareness",
    "violent",
    "slave",
    "wealthy",
    "architecture",
    "acceptable",
    "journal",
    "coal",
    "measurement",
    "random",
    "successfully",
    "depress",
    "illustration",
    "burst",
    "privilege",
    "buyer",
    "mutual",
    "rail",
    "motivate",
    "laboratory",
    "mortgage",
    "promotion",
    "passion",
    "champion",
    "fulfill",
    "dust",
    "dedicate",
    "roughly",
    "skirt",
    "province",
    "march",
    "evaluation",
    "compromise",
    "accomplish",
    "weakness",
    "announcement",
    "salt",
    "glance",
    "opera",
    "contest",
    "brush",
    "embarrass",
    "gallery",
    "genetic",
    "aggressive",
    "chest",
    "format",
    "literary",
    "govern",
    "embrace",
    "praise",
    "silent",
    "pump",
    "publisher",
    "celebration",
    "golf",
    "compensation",
    "classical",
    "weigh",
    "versus",
    "deficit",
    "modify",
    "flash",
    "friendship",
    "profession",
    "literally",
    "equation",
    "gesture",
    "entertain",
    "fantastic",
    "assign",
    "inflation",
    "historic",
    "injure",
    "remote",
    "therapy",
    "orange",
    "twist",
    "personnel",
    "imagination",
    "disagree",
    "throat",
    "insight",
    "tackle",
    "forever",
    "exceed",
    "expenditure",
    "joy",
    "pregnant",
    "reliable",
    "gear",
    "click",
    "poet",
    "fortune",
    "ceremony",
    "pile",
    "pig",
    "mixture",
    "automatically",
    "scholar",
    "psychological",
    "dramatically",
    "stake",
    "creature",
    "partnership",
    "participation",
    "clause",
    "penalty",
    "chamber",
    "fancy",
    "poetry",
    "chat",
    "clothing",
    "evolve",
    "sake",
    "shelf",
    "boost",
    "tail",
    "possession",
    "abortion",
    "curious",
    "wooden",
    "boom",
    "tale",
    "democratic",
    "maintenance",
    "consequently",
    "pot",
    "cow",
    "strengthen",
    "whilst",
    "constraint",
    "fold",
    "bin",
    "undergo",
    "potentially",
    "scope",
    "pretend",
    "diversity",
    "allege",
    "pride",
    "intense",
    "inquiry",
    "resign",
    "craft",
    "strict",
    "concrete",
    "shell",
    "damn",
    "distinct",
    "humor",
    "limitation",
    "indication",
    "stability",
    "wise",
    "neglect",
    "compose",
    "jail",
    "shelter",
    "mere",
    "carbon",
    "regulate",
    "cheese",
    "trigger",
    "pipe",
    "destruction",
    "guitar",
    "flag",
    "piano",
    "magic",
    "mystery",
    "ski",
    "whisper",
    "rear",
    "menu",
    "species",
    "moon",
    "presumably",
    "bless",
    "airline",
    "amendment",
    "grandmother",
    "jury",
    "cooperation",
    "civilian",
    "composition",
    "coin",
    "regardless",
    "scan",
    "bunch",
    "racial",
    "greet",
    "hopefully",
    "sanction",
    "trick",
    "paragraph",
    "maker",
    "chocolate",
    "stimulate",
    "belt",
    "potato",
    "narrative",
    "tissue",
    "barely",
    "invent",
    "tourism",
    "pro",
    "stair",
    "hesitate",
    "shine",
    "motivation",
    "romantic",
    "firmly",
    "interior",
    "stomach",
    "nowhere",
    "pray",
    "championship",
    "servant",
    "immigrant",
    "excess",
    "complexity",
    "liability",
    "surprisingly",
    "extract",
    "implementation",
    "bias",
    "differently",
    "catalog",
    "continuous",
    "golden",
    "stamp",
    "guideline",
    "envelope",
    "knife",
    "biological",
    "consume",
    "luxury",
    "weekly",
    "wherever",
    "bite",
    "printer",
    "firstly",
    "anxious",
    "adventure",
    "fence",
    "exhaust",
    "attraction",
    "ocean",
    "quietly",
    "castle",
    "veteran",
    "reflection",
    "nerve",
    "determination",
    "altogether",
    "fiction",
    "carpet",
    "cluster",
    "confusion",
    "hurry",
    "logic",
    "controversial",
    "raw",
    "grammar",
    "revise",
    "hint",
    "hook",
    "bell",
    "liquid",
    "panic",
    "uncle",
    "rice",
    "slope",
    "happiness",
    "genuine",
    "vessel",
    "verb",
    "reckon",
    "silly",
    "transportation",
    "harbor",
    "comedy",
    "chase",
    "storage",
    "universe",
    "horrible",
    "sheep",
    "lover",
    "rat",
    "portrait",
    "innocent",
    "substitute",
    "supplement",
    "adjustment",
    "reasonably",
    "filter",
    "flexible",
    "abstract",
    "tent",
    "precise",
    "distant",
    "stranger",
    "shade",
    "grain",
    "situate",
    "summarize",
    "leap",
    "snap",
    "probability",
    "leather",
    "uncertainty",
    "swear",
    "refugee",
    "shore",
    "monthly",
    "comprise",
    "stir",
    "excitement",
    "sigh",
    "pregnancy",
    "experimental",
    "institutional",
    "slice",
    "wander",
    "empire",
    "subsequently",
    "gentle",
    "attendance",
    "ownership",
    "qualification",
    "suspend",
    "functional",
    "voluntary",
    "pale",
    "stain",
    "athlete",
    "organic",
    "tongue",
    "server",
    "structural",
    "website",
    "fool",
    "alongside",
    "unite",
    "gently",
    "compute",
    "wipe",
    "weird",
    "gaze",
    "fade",
    "cough",
    "hypothesis",
    "royal",
    "theoretical",
    "curtain",
    "mayor",
    "darkness",
    "aunt",
    "tournament",
    "registration",
    "fragment",
    "listener",
    "immigration",
    "tender",
    "density",
    "ugly",
    "module",
    "faithfully",
    "autumn",
    "cheek",
    "attachment",
    "holder",
    "solar",
    "grin",
    "rose",
    "noun",
    "fortunate",
    "alright",
    "lazy",
    "hello",
    "hunger",
    "insure",
    "ashamed",
    "found",
    "blog",
    "thirst",
  ];
  const wordsWithDefinitions = [
    {
      Word: "abuse",
      Definitons:
        "to treat someone or something in a way that is cruel, harmful, or wrong",
    },
    {
      Word: "accident",
      Definitons: "sudden unplanned event causing damage, injury, etc.",
    },
    {
      Word: "habit",
      Definitons: "the usual way of behaving; something often repeated",
    },
    {
      Word: "activity",
      Definitons: "an action or task (e.g., sports, washing your clothes)",
    },
    {
      Word: "add",
      Definitons: "to put two things or numbers together (e.g., 2+2)",
    },
    {
      Word: "adjust",
      Definitons: "to change so as to fit in with new conditions",
    },
    {
      Word: "administration",
      Definitons: "the work of running something (e.g., a business)",
    },
    {
      Word: "advocate",
      Definitons: "to publicly support a belief, or to request a change",
    },
    {
      Word: "analyst",
      Definitons: "someone who is skilled at studying the details of data",
    },
    {
      Word: "arrival",
      Definitons: "when someone or something gets to a place",
    },
    {
      Word: "highlight",
      Definitons: "the best or most interesting part of something",
    },
    {
      Word: "button",
      Definitons: "small round piece of material used to fasten clothing",
    },
    {
      Word: "appearance",
      Definitons: "way that someone or something looks",
    },
    {
      Word: "application",
      Definitons: "formal request for a job, building permission, etc.",
    },
    {
      Word: "apply",
      Definitons: "to ask formally for (a job, building permission, etc.)",
    },
    {
      Word: "as",
      Definitons: "a word used to compare two equal things",
    },
    {
      Word: "argument",
      Definitons: "a discussion in which you disagree with another's opinion",
    },
    {
      Word: "arrange",
      Definitons:
        "to put things into a particular order; to plan and organize an event",
    },
    {
      Word: "arrangement",
      Definitons: "plan or preparation to make something happen; an agreement",
    },
    {
      Word: "hunt",
      Definitons: "to search for wild animals to kill for food or sport",
    },
    {
      Word: "art",
      Definitons: "a creative skill using the imagination (e.g., painting)",
    },
    {
      Word: "characterize",
      Definitons: "to describe the qualities of a person, place, thing",
    },
    {
      Word: "assessment",
      Definitons:
        "opinion based on judging the qualities of something or someone",
    },
    {
      Word: "asset",
      Definitons:
        "a person or thing that has value or use to someone or to a company",
    },
    {
      Word: "back",
      Definitons: "behind; to the rear; previous ",
    },
    {
      Word: "associate",
      Definitons: "partner in professional work (e.g., in law)",
    },
    {
      Word: "atmosphere",
      Definitons:
        "The mixture of gases surrounding the Earth; the feeling that a place or situation gives you",
    },
    {
      Word: "attitude",
      Definitons: "way you act, think, and feel about something",
    },
    {
      Word: "illustrate",
      Definitons: "to explain with examples, to make it easier to understand",
    },
    {
      Word: "audience",
      Definitons: "group of people listening, watch a play, movie, etc.",
    },
    {
      Word: "author",
      Definitons: "person who writes books, plays, poems, etc.",
    },
    {
      Word: "impose",
      Definitons: "to make someone to do, believe, or accept something ",
    },
    {
      Word: "band",
      Definitons: "group of people who work together (e.g., play music)",
    },
    {
      Word: "bar",
      Definitons: "to prevent entry, exit, or an action",
    },
    {
      Word: "basically",
      Definitons: "in the most important ways even if not completely true",
    },
    {
      Word: "bedroom",
      Definitons: "room for sleeping usually with a bed",
    },
    {
      Word: "belief",
      Definitons: "a feeling of being sure that something exists or is true",
    },
    {
      Word: "bind",
      Definitons: "to join two or more things together to limit their freedom",
    },
    {
      Word: "birth",
      Definitons: "when a baby comes out of the body of its mother",
    },
    {
      Word: "bomb",
      Definitons:
        "a weapon designed to break apart very suddenly and violently",
    },
    {
      Word: "bond",
      Definitons:
        "something that joins or connects people, groups, or parts; a duty or promise to another; glue",
    },
    {
      Word: "border",
      Definitons: "line separating one country or state from another",
    },
    {
      Word: "competitor",
      Definitons: "someone taking part in a race, business, etc.",
    },
    {
      Word: "incident",
      Definitons: "something that happens, especially if it is bad or unusual",
    },
    {
      Word: "intelligence",
      Definitons: "ability to learn, think about, and understand things",
    },
    {
      Word: "branch",
      Definitons:
        "a part of a tree that grows out from the main part; a part of an organization connected to but separate from the main office",
    },
    {
      Word: "brand",
      Definitons: "name given to a product or service",
    },
    {
      Word: "build",
      Definitons: "to make (e.g., a house, by putting materials together)",
    },
    {
      Word: "business",
      Definitons: "the making, buying, or selling goods or services for money",
    },
    {
      Word: "bridge",
      Definitons:
        "structure built over river or road so people, vehicles, or animals can cross",
    },
    {
      Word: "coverage",
      Definitons:
        "way a newspaper, television program, etc., reports an event or subject",
    },
    {
      Word: "crew",
      Definitons: "an organized group of workers (e.g., on a ship)",
    },
    {
      Word: "kick",
      Definitons: "to hit someone or something using your foot",
    },
    {
      Word: "kiss",
      Definitons: "to put your lips against another's to show love",
    },
    {
      Word: "dependent",
      Definitons: "someone who depends on another for (financial) support",
    },
    {
      Word: "campaign",
      Definitons: "to work in an organized and active way toward a goal",
    },
    {
      Word: "latter",
      Definitons: "the second or last mentioned thing",
    },
    {
      Word: "lock",
      Definitons: "to close something with a device so others can't open it",
    },
    {
      Word: "cent",
      Definitons:
        "100th of the basic unit of money (e.g., there are 100 of these in a dollar)",
    },
    {
      Word: "certainly",
      Definitons: "definitely true or is sure to happen",
    },
    {
      Word: "chain",
      Definitons: "series of connected  things, events, or people",
    },
    {
      Word: "channel",
      Definitons:
        "1. a narrow, deep body of water used by ships; 2. a system used for sending something from one place or person to another",
    },
    {
      Word: "characteristic",
      Definitons:
        "a typical feature or quality that a particular person or thing has",
    },
    {
      Word: "milk",
      Definitons: "the white liquid produced by females to feed their babies",
    },
    {
      Word: "color",
      Definitons: "the quality of things you can see (e.g., red, blue)",
    },
    {
      Word: "origin",
      Definitons: "the point at which something begins or is created",
    },
    {
      Word: "church",
      Definitons: "building where religious people gather and pray",
    },
    {
      Word: "drag",
      Definitons: "to pull something that is difficult to move",
    },
    {
      Word: "civil",
      Definitons: "related to the people of a country; not military/criminal",
    },
    {
      Word: "proportion",
      Definitons: "an amount that is a part of a whole thing",
    },
    {
      Word: "reject",
      Definitons: "to refuse to believe, accept, or consider",
    },
    {
      Word: "clothes",
      Definitons: "things you wear on your body (e.g., shirt, dress, tie)",
    },
    {
      Word: "course",
      Definitons: "route or direction that a river, etc., moves along",
    },
    {
      Word: "colleague",
      Definitons: "someone who works with you; coworker",
    },
    {
      Word: "formula",
      Definitons: "plan, rule, or method for doing or making something",
    },
    {
      Word: "combination",
      Definitons: "result of mixing things together",
    },
    {
      Word: "foundation",
      Definitons: "underground base on which a building is constructed",
    },
    {
      Word: "lip",
      Definitons: "top and bottom part of the outside of a person's mouth",
    },
    {
      Word: "comment",
      Definitons: "something you say; give an opinion; remark",
    },
    {
      Word: "commission",
      Definitons:
        "a group officially put in charge of finding out about something or controlling something",
    },
    {
      Word: "commitment",
      Definitons:
        "a promise or decision to do something; something that you must do that takes your time",
    },
    {
      Word: "relief",
      Definitons:
        "the pleasant and relaxed feeling when something unpleasant stops or does not happen",
    },
    {
      Word: "complain",
      Definitons:
        "to say that you are not happy or satisfied with something or someone",
    },
    {
      Word: "component",
      Definitons: "one of the parts that make up something",
    },
    {
      Word: "concentrate",
      Definitons: "to give all your attention to a task; focus",
    },
    {
      Word: "condition",
      Definitons: "state of living you are in (e.g., good health)",
    },
    {
      Word: "margin",
      Definitons:
        "the empty space at the top, bottom, and sides of a written or printed page",
    },
    {
      Word: "content",
      Definitons: "information in something (e.g., a book or computer program)",
    },
    {
      Word: "contract",
      Definitons: "legal agreement (e.g., for doing work for money)",
    },
    {
      Word: "contribute",
      Definitons: "give something of value to or help someone or something",
    },
    {
      Word: "pace",
      Definitons: "the speed at which someone or something moves or happens",
    },
    {
      Word: "corner",
      Definitons: "place where two lines, sides, corners, etc., meet",
    },
    {
      Word: "reputation",
      Definitons:
        "an opinion that people have about someone or something based on the past",
    },
    {
      Word: "shoulder",
      Definitons: "the part of the body where an arm attaches or joins",
    },
    {
      Word: "perception",
      Definitons: "the way in which one sees or understands something",
    },
    {
      Word: "similarly",
      Definitons:
        "in a way that is almost the same as something or someone else",
    },
    {
      Word: "crime",
      Definitons: "act that is against the law; murder, theft, etc.",
    },
    {
      Word: "supporter",
      Definitons: "someone who shows they are in favor of an idea/plan",
    },
    {
      Word: "symbol",
      Definitons:
        "action or object that represents a particular idea or quality",
    },
    {
      Word: "cultural",
      Definitons: "of a particular society's customs and beliefs",
    },
    {
      Word: "sky",
      Definitons: "the place where we see clouds above us",
    },
    {
      Word: "cream",
      Definitons:
        "the thick white liquid that comes from milk and is used in cooking",
    },
    {
      Word: "evolution",
      Definitons: "slow, steady change or development",
    },
    {
      Word: "example",
      Definitons: "something or someone who represents a group",
    },
    {
      Word: "decrease",
      Definitons: "to reduce the size, amount, or number of something",
    },
    {
      Word: "exhaust",
      Definitons:
        "to use all of something such as energy, resources, or possibilities; to make someone very, very tired",
    },
    {
      Word: "soul",
      Definitons: "the spiritual part of a person",
    },
    {
      Word: "delay",
      Definitons: "to cause something to happen later than planned or expected",
    },
    {
      Word: "specifically",
      Definitons: "in a well-defined or clear manner; in particular",
    },
    {
      Word: "demonstrate",
      Definitons: "to show how something works (e.g., product)",
    },
    {
      Word: "extract",
      Definitons: "to take something out of something else",
    },
    {
      Word: "talent",
      Definitons: "the natural ability of a person to do something well",
    },
    {
      Word: "desire",
      Definitons: "to wish for, hope, or want something",
    },
    {
      Word: "destroy",
      Definitons: "to damage something so badly that it no longer exists",
    },
    {
      Word: "direction",
      Definitons: "describes the way you are going (e.g., north)",
    },
    {
      Word: "distinction",
      Definitons: "the special quality that makes something different",
    },
    {
      Word: "division",
      Definitons:
        "act of separating something into parts; groups formed by different functions or opinions",
    },
    {
      Word: "doctor",
      Definitons:
        "a professional who is trained and licensed to treat sick or injured people; a person who has the highest degree given by a university",
    },
    {
      Word: "domestic",
      Definitons:
        "of or relating to a particular country; of or relating to the home and family",
    },
    {
      Word: "iron",
      Definitons: "the hard metal used to make steel (symbol Fe)",
    },
    {
      Word: "economy",
      Definitons: "total of all the goods, services, and wages in an area",
    },
    {
      Word: "editor",
      Definitons:
        "a person whose job is to correct and make changes to the contents of a book or magazine",
    },
    {
      Word: "elect",
      Definitons: "choose someone for a position usually by voting ",
    },
    {
      Word: "knee",
      Definitons: "the middle part of your leg that bends",
    },
    {
      Word: "stem",
      Definitons:
        "the long, thin part of a plant that supports leaves and flowers",
    },
    {
      Word: "engineer",
      Definitons:
        "professional who designs and builds machines, roads, and other complicated structures",
    },
    {
      Word: "entirely",
      Definitons: "fully or completely",
    },
    {
      Word: "wage",
      Definitons: "money paid to workers for the hours they worked",
    },
    {
      Word: "wheel",
      Definitons:
        "the round thing under a vehicle that turns and makes it move",
    },
    {
      Word: "escape",
      Definitons: "to get away from a place where you are being held",
    },
    {
      Word: "winner",
      Definitons:
        "the person or animal that is the best in a contest or first in a race",
    },
    {
      Word: "estimate",
      Definitons: "guess or calculation of cost, size, or value",
    },
    {
      Word: "appointment",
      Definitons: "the time you arranged to meet someone or do something",
    },
    {
      Word: "here",
      Definitons: "in, at, or to this position or place",
    },
    {
      Word: "examine",
      Definitons:
        "to look at someone or something very carefully in order to learn more",
    },
    {
      Word: "breakfast",
      Definitons: "the first meal of the day",
    },
    {
      Word: "excite",
      Definitons: "to make someone feel happy, interested, or eager",
    },
    {
      Word: "however",
      Definitons:
        "used to say something is different from what was said before; but",
    },
    {
      Word: "breast",
      Definitons:
        "one of the two parts on the front of a woman's body that produce milk when she has a baby",
    },
    {
      Word: "capture",
      Definitons: "to catch and prevent a person/animal from being free",
    },
    {
      Word: "celebrate",
      Definitons: "to observe an event or occasion (e.g., a birthday)",
    },
    {
      Word: "expense",
      Definitons: "the amount of money that is needed to pay for something",
    },
    {
      Word: "explore",
      Definitons:
        "to learn about something by examining in detail or someplace by traveling to it",
    },
    {
      Word: "extend",
      Definitons: "to straighten or stretch something out (e.g., your leg)",
    },
    {
      Word: "childhood",
      Definitons: "the time when you are a child",
    },
    {
      Word: "fairly",
      Definitons: "in a reasonable way; between a little and very much",
    },
    {
      Word: "farmer",
      Definitons:
        "someone who owns or looks after farm, a place for growing crops and keeping animals",
    },
    {
      Word: "fear",
      Definitons: "unpleasant feelings caused by being aware of danger",
    },
    {
      Word: "feed",
      Definitons: "to give food (e.g., to an animal or a baby)",
    },
    {
      Word: "closely",
      Definitons: "very near in space or time; just next to",
    },
    {
      Word: "file",
      Definitons: "to submit documents to an authority (e.g., city hall)",
    },
    {
      Word: "angle",
      Definitons: "a place where two lines or surfaces meet",
    },
    {
      Word: "flower",
      Definitons: "plant with a pretty head (e.g., a rose)",
    },
    {
      Word: "attribute",
      Definitons:
        "a quality or characteristic that someone or something has (e.g., size or color)",
    },
    {
      Word: "command",
      Definitons: "to give an order; have control over others",
    },
    {
      Word: "consistent",
      Definitons: "always acting or happening in the same way",
    },
    {
      Word: "core",
      Definitons:
        "the central part of a fruit that contains the seeds; the central part of something",
    },
    {
      Word: "frame",
      Definitons:
        "(n) 1. the basic structure of something that gives it its shape, to which other parts are added; 2. one picture in a series that make a video; (v) 1. to put a picture in a supporting structure; 2. to produce false evidence so an innocent person appears guilty of a crime",
    },
    {
      Word: "bowl",
      Definitons: "a round container used for holding things like rice or soup",
    },
    {
      Word: "crop",
      Definitons: "plants grown on a farm for food (e.g., corn or rice)",
    },
    {
      Word: "gain",
      Definitons: "to get something wanted, needed, or valued",
    },
    {
      Word: "debt",
      Definitons: "the sum of money owed to somebody that is not yet paid",
    },
    {
      Word: "generally",
      Definitons: "usually; as a rule; by, to, or for most people",
    },
    {
      Word: "last",
      Definitons: "the one before",
    },
    {
      Word: "exhibition",
      Definitons:
        "an event at which an object or group of objects is shown to the public",
    },
    {
      Word: "graduate",
      Definitons:
        "(v) to receive a degree from a college or university; (n) a person who has received a degree",
    },
    {
      Word: "leave",
      Definitons: "to go away from; depart",
    },
    {
      Word: "liability",
      Definitons: "something that is owed to someone else (e.g., a debt)",
    },
    {
      Word: "gun",
      Definitons: "a weapon that shoots small metal objects down a metal tube",
    },
    {
      Word: "life",
      Definitons: "all the living things (e.g., animals, plants, humans)",
    },
    {
      Word: "hall",
      Definitons:
        "a usually long, narrow room in a building  that leads to other rooms",
    },
    {
      Word: "hang",
      Definitons: "to attach a picture, photograph, etc., onto a wall",
    },
    {
      Word: "line",
      Definitons: "mark that is long, straight, and very thin",
    },
    {
      Word: "cake",
      Definitons: "a sweet baked food made from flour, eggs, fat, and sugar",
    },
    {
      Word: "hire",
      Definitons: "to employ a person to do a particular job",
    },
    {
      Word: "historical",
      Definitons: "of or related to events or people in the past",
    },
    {
      Word: "host",
      Definitons: "person who entertains guests",
    },
    {
      Word: "hotel",
      Definitons: "place where people can stay when traveling",
    },
    {
      Word: "fellow",
      Definitons: "someone in the same group or situation; a boy or man",
    },
    {
      Word: "many",
      Definitons: "used to refer to a large number of things",
    },
    {
      Word: "currency",
      Definitons: "a money system that a country uses",
    },
    {
      Word: "hurt",
      Definitons: "to cause pain, damage, or injury",
    },
    {
      Word: "ice",
      Definitons: "frozen water ",
    },
    {
      Word: "gene",
      Definitons:
        "part of a cell that controls the development and appearance of a living thing",
    },
    {
      Word: "identity",
      Definitons:
        "who someone is; the collection of qualities that makes a person",
    },
    {
      Word: "curve",
      Definitons: "a smooth rounded line that is not straight",
    },
    {
      Word: "image",
      Definitons: "picture, sculpture, or painting of something",
    },
    {
      Word: "imagine",
      Definitons: "to think creatively about; form a mental picture of",
    },
    {
      Word: "modify",
      Definitons: "to make small changes to something",
    },
    {
      Word: "month",
      Definitons:
        "one of 12 time periods that make a year, each from 28 to 31 days long",
    },
    {
      Word: "income",
      Definitons: "earned money from work, investments, or business",
    },
    {
      Word: "indicate",
      Definitons: "to show something, direct attention to, or point out",
    },
    {
      Word: "industrial",
      Definitons:
        "concerning the people and businesses that make certain products",
    },
    {
      Word: "guard",
      Definitons: "to keep watch over something to protect it e.g., a bank",
    },
    {
      Word: "insist",
      Definitons:
        "to state your opinion strongly and firmly; to demand that something must happen",
    },
    {
      Word: "instrument",
      Definitons:
        "a piece of equipment used for a particular purpose such as making music or measuring something",
    },
    {
      Word: "depression",
      Definitons: "a feeling of great sadness",
    },
    {
      Word: "off",
      Definitons: "away from; not on",
    },
    {
      Word: "investor",
      Definitons:
        "a person who gives money to help a business grow for a profit",
    },
    {
      Word: "on",
      Definitons: "located on the surface of something (e.g., a table or wall)",
    },
    {
      Word: "entrance",
      Definitons: "a way into a place",
    },
    {
      Word: "order",
      Definitons: "to ask for something you want to buy (e.g., a meal)",
    },
    {
      Word: "accommodation",
      Definitons: "a place to stay, often a hotel",
    },
    {
      Word: "flood",
      Definitons: "a large amount of water covering land that is usually dry",
    },
    {
      Word: "assistant",
      Definitons: "a person who helps another, usually as a job",
    },
    {
      Word: "party",
      Definitons: "social event often with food, drinks, and dancing",
    },
    {
      Word: "label",
      Definitons:
        "a piece of paper or cloth that is attached to something and gives information about it",
    },
    {
      Word: "lady",
      Definitons: "another way of saying 'woman'",
    },
    {
      Word: "boss",
      Definitons: "a person who manages you, or is in charge of you at work",
    },
    {
      Word: "past",
      Definitons: "the time that existed before now (e.g., long ago)",
    },
    {
      Word: "forecast",
      Definitons: "a prediction of some future thing (e.g., the weather)",
    },
    {
      Word: "jacket",
      Definitons: "a light, thin coat",
    },
    {
      Word: "lawyer",
      Definitons: "a professional who is paid to help people with the law",
    },
    {
      Word: "plan",
      Definitons: "to decide a set of actions to do something",
    },
    {
      Word: "lesson",
      Definitons: "a time or event where teaching and learning occur; class",
    },
    {
      Word: "bottle",
      Definitons:
        "a container with a narrow neck used to hold liquids like water or wine",
    },
    {
      Word: "license",
      Definitons:
        "official document which allows a person to do or have something",
    },
    {
      Word: "chemical",
      Definitons: "a basic substance produced by mixing elements",
    },
    {
      Word: "delight",
      Definitons: "a strong feeling of great pleasure and happiness",
    },
    {
      Word: "engine",
      Definitons: "a machine that changes energy into motion",
    },
    {
      Word: "loan",
      Definitons:
        "something (usually money) that is given to someone for a period of time with a promise that it will be returned",
    },
    {
      Word: "locate",
      Definitons: "to find a certain place, position, or location of something",
    },
    {
      Word: "expectation",
      Definitons: "a belief or hope that something is going to happen",
    },
    {
      Word: "gentleman",
      Definitons: "a man who has good manners and is considerate",
    },
    {
      Word: "journalist",
      Definitons:
        "a person who writes news reports for newspapers, magazines, television, or radio",
    },
    {
      Word: "lake",
      Definitons: "a large area of water surrounded by land",
    },
    {
      Word: "room",
      Definitons: "a part of building enclosed by walls (e.g., kitchen)",
    },
    {
      Word: "mass",
      Definitons: "a large amount of something, often of no particular shape",
    },
    {
      Word: "master",
      Definitons:
        "1. someone who has control over others; 2. someone who is very skilled at doing something",
    },
    {
      Word: "meal",
      Definitons: "food for eating at a particular time (e.g., dinner)",
    },
    {
      Word: "landscape",
      Definitons:
        "a large area of countryside or land that has a particular quality or appearance",
    },
    {
      Word: "set",
      Definitons: "complete group of something (e.g., a chess set)",
    },
    {
      Word: "miss",
      Definitons: "to be too late to ride on something (e.g., train or bus)",
    },
    {
      Word: "mistake",
      Definitons: "something done wrong, calculated wrong.; error",
    },
    {
      Word: "model",
      Definitons: "a copy that represents an object or standard",
    },
    {
      Word: "mirror",
      Definitons: "a thing with a glass surface used to look at yourself",
    },
    {
      Word: "mouse",
      Definitons: "a small animal that has fur and a long tail",
    },
    {
      Word: "moral",
      Definitons: "relating to people's belief about right or wrong behavior",
    },
    {
      Word: "morning",
      Definitons: "early part of the day before 12 noon",
    },
    {
      Word: "participant",
      Definitons: "a person who is actively involved and included in something",
    },
    {
      Word: "passenger",
      Definitons: "A person who is traveling in a vehicle",
    },
    {
      Word: "narrow",
      Definitons:
        "long but not wide; a small distance from one side to the other compared to length",
    },
    {
      Word: "negative",
      Definitons: "being harmful, unwanted, or unhelpful",
    },
    {
      Word: "neither",
      Definitons: "not one or the other; not either; none of two things",
    },
    {
      Word: "net",
      Definitons:
        "material made of string tied together and used to catch fish or other small animals",
    },
    {
      Word: "nevertheless",
      Definitons: "despite what has just been done or said; nonetheless",
    },
    {
      Word: "musician",
      Definitons: "a person who writes, sings, or plays music, as a job",
    },
    {
      Word: "noise",
      Definitons: "a loud or unpleasant sound ",
    },
    {
      Word: "none",
      Definitons: "not one of a group; not at all or in no way",
    },
    {
      Word: "opponent",
      Definitons:
        "a person that you are competing against in a game or contest",
    },
    {
      Word: "occasion",
      Definitons: "particular time when something important or special happens",
    },
    {
      Word: "odd",
      Definitons: "being strange or different from what is usual or expected",
    },
    {
      Word: "plate",
      Definitons: "a flat dish used for eating or serving food",
    },
    {
      Word: "snap",
      Definitons: "to break something long and thin",
    },
    {
      Word: "onto",
      Definitons: "movement towards a position that is on something",
    },
    {
      Word: "plot",
      Definitons: "a plan to do something, often in secret and bad",
    },
    {
      Word: "oppose",
      Definitons:
        "to be against someone in a contest, game, or fight; to disagree",
    },
    {
      Word: "producer",
      Definitons: "a company making or growing a certain product",
    },
    {
      Word: "organize",
      Definitons: "to arrange and plan things (e.g., a party)",
    },
    {
      Word: "phenomenon",
      Definitons: "a fact that can be observed and studied",
    },
    {
      Word: "original",
      Definitons: "being first made, thought, or performed; fresh",
    },
    {
      Word: "stay",
      Definitons: "to spend time visiting a place or someone's home",
    },
    {
      Word: "package",
      Definitons: "box or container in which items are placed for mailing",
    },
    {
      Word: "pair",
      Definitons: "two of the same thing (e.g., socks)",
    },
    {
      Word: "shadow",
      Definitons: "a dark shape that appears when something stops the light",
    },
    {
      Word: "subject",
      Definitons: "the person, or thing that is being talked, or written about",
    },
    {
      Word: "singer",
      Definitons: "a person who sings, often as a profession",
    },
    {
      Word: "such",
      Definitons: "so like, or similar",
    },
    {
      Word: "statistic",
      Definitons: "a number that represents a piece of information",
    },
    {
      Word: "substance",
      Definitons: "a particular type of material",
    },
    {
      Word: "summary",
      Definitons: "a brief statement that gives the most important information",
    },
    {
      Word: "permit",
      Definitons: "to allow someone to do something or for something to happen",
    },
    {
      Word: "protein",
      Definitons:
        "a substance found in some foods, such as meat, that is needed by the body to stay healthy",
    },
    {
      Word: "teenager",
      Definitons: "a person between the ages of 13 and 19",
    },
    {
      Word: "photograph",
      Definitons:
        "a picture made with a camera that shows how things look in real life",
    },
    {
      Word: "throat",
      Definitons: "passage inside the neck used to swallow and breathe",
    },
    {
      Word: "tourism",
      Definitons: "traveling to new places (e.g., abroad, for vacations)",
    },
    {
      Word: "plenty",
      Definitons: "a large  amount of something; a lot; not too little",
    },
    {
      Word: "tower",
      Definitons: "a tall, narrow building",
    },
    {
      Word: "transition",
      Definitons: "a gradual change from one condition to another",
    },
    {
      Word: "population",
      Definitons: "number of people who live in a country, area, etc.",
    },
    {
      Word: "trap",
      Definitons: "a device used for catching animals",
    },
    {
      Word: "practical",
      Definitons:
        "relating to what is sensible, real, or useful rather than with ideas or theories",
    },
    {
      Word: "presence",
      Definitons: "fact that someone or something is in a particular place",
    },
    {
      Word: "president",
      Definitons: "person in charge of a country, company, or organization",
    },
    {
      Word: "principal",
      Definitons:
        "1. most important; main; 2.  the person in charge of a (US) public school",
    },
    {
      Word: "principle",
      Definitons:
        "strong belief that influences a person's actions; basic law or belief",
    },
    {
      Word: "print",
      Definitons: "to make many copies of a page, magazine, or book",
    },
    {
      Word: "prison",
      Definitons:
        "a place where people who have committed serious crimes are held",
    },
    {
      Word: "turn",
      Definitons: "to change the direction of something (e.g., a car)",
    },
    {
      Word: "professional",
      Definitons: "about a job such as a doctor, lawyer, accountant, etc.",
    },
    {
      Word: "property",
      Definitons: "things, buildings, or pieces of land owned by someone",
    },
    {
      Word: "vegetable",
      Definitons: "a plant that is raised and eaten as food",
    },
    {
      Word: "row",
      Definitons: "a straight line of people or things; one after another",
    },
    {
      Word: "provision",
      Definitons:
        "1. supplies that are needed or wanted; something that is supplied; 2. part of a law or an agreement",
    },
    {
      Word: "sheet",
      Definitons:
        "a large piece of fabric or material that is used to cover something, often a bed",
    },
    {
      Word: "race",
      Definitons:
        "contest between people, animals, or vehicles, to determine which is the fastest",
    },
    {
      Word: "rank",
      Definitons:
        "to place someone or something in higher or lower position relative to others",
    },
    {
      Word: "ready",
      Definitons: "prepared to do something",
    },
    {
      Word: "recommendation",
      Definitons: "suggestion about someone or something being a good choice",
    },
    {
      Word: "water",
      Definitons: "clear liquid that forms the seas, rivers, and rain",
    },
    {
      Word: "reflect",
      Definitons: "to bounce back off a surface (e.g., light)",
    },
    {
      Word: "region",
      Definitons: "part of a country, of the world, area, etc.",
    },
    {
      Word: "shirt",
      Definitons: "a light piece of clothing with sleeves for the upper body",
    },
    {
      Word: "relation",
      Definitons:
        "manner in which people, groups, or countries behave toward one another",
    },
    {
      Word: "relax",
      Definitons:
        "to stop feeling nervous or worried; to rest and do something enjoyable",
    },
    {
      Word: "release",
      Definitons: "to allow to leave jail, cage, prison, etc.",
    },
    {
      Word: "relevant",
      Definitons: "direct related to a subject in a considerable way",
    },
    {
      Word: "which",
      Definitons: "question word to ask about a person's choice",
    },
    {
      Word: "rely",
      Definitons: "able to depend on",
    },
    {
      Word: "voter",
      Definitons: "a person who can vote in an election",
    },
    {
      Word: "represent",
      Definitons: "to stand in the place or to act the part of",
    },
    {
      Word: "witness",
      Definitons: "a person who sees something happen",
    },
    {
      Word: "would",
      Definitons: "modal verb used to indicate possibility, request, etc.",
    },
    {
      Word: "ring",
      Definitons:
        "to produce a sound from a bell, alarm, or telephone; a piece of jewelry worn on a finger",
    },
    {
      Word: "write",
      Definitons: "to make letters and words on paper or a screen",
    },
    {
      Word: "joint",
      Definitons:
        "1. (n.) place where two things meet; 2. (adj.) done together",
    },
    {
      Word: "reserve",
      Definitons:
        "1. (v) to arrange to use a room or table at a particular time; 2. (n) a store of something",
    },
    {
      Word: "pupil",
      Definitons:
        "1. a child or young person who is being taught; a student; 2. the black round part in the center of the eye that lets in light",
    },
    {
      Word: "sample",
      Definitons: "to try something to see if you like it (e.g., food)",
    },
    {
      Word: "scientist",
      Definitons:
        "a person who is trained to gain knowledge by making predictions, testing them, and developing theories",
    },
    {
      Word: "seat",
      Definitons: "something on which a person can sit",
    },
    {
      Word: "secret",
      Definitons: "something that you don't want others to know; private",
    },
    {
      Word: "secretary",
      Definitons:
        "an employee who does general office work for another person in the office",
    },
    {
      Word: "security",
      Definitons:
        "things done to protect people, buildings, a country, etc., from harm",
    },
    {
      Word: "seriously",
      Definitons:
        "in a serious way; in a way that shows something is important",
    },
    {
      Word: "session",
      Definitons: "period of time for doing a particular activity",
    },
    {
      Word: "pitch",
      Definitons:
        "1. the level of a sound; 2. a throw of a ball; 3. a speech to sell something; 4. black substance that is sticky when hot and hard when dry",
    },
    {
      Word: "second",
      Definitons: "2nd; the one following first",
    },
    {
      Word: "hour",
      Definitons: "60 minutes; one of 24 equal units of time in a day",
    },
    {
      Word: "fault",
      Definitons:
        "a bad quality or part of someone or something; responsibility for a mistake or bad situation",
    },
    {
      Word: "shoe",
      Definitons:
        "outer covering worn on the foot to protect it usually sold in pairs",
    },
    {
      Word: "shot",
      Definitons:
        "the act of firing a gun, or kicking or throwing a ball at a goal",
    },
    {
      Word: "god",
      Definitons:
        "a being with special powers that cannot be explained by nature",
    },
    {
      Word: "sight",
      Definitons: "the ability to see ",
    },
    {
      Word: "sign",
      Definitons:
        "something such as a mark or event that shows that something exists, is true, is happening or will happen",
    },
    {
      Word: "signal",
      Definitons:
        "An action, change, or process that gives information about something",
    },
    {
      Word: "muscle",
      Definitons:
        "a body tissue that can become longer or shorter and moves the body",
    },
    {
      Word: "enterprise",
      Definitons: "a business or organization",
    },
    {
      Word: "site",
      Definitons:
        "present, former, or future location of something, such as a building",
    },
    {
      Word: "skin",
      Definitons: "outer layer of an animal's or human's body",
    },
    {
      Word: "company",
      Definitons: "a business that sells things or provides services",
    },
    {
      Word: "slowly",
      Definitons: "done in a way that takes a long time",
    },
    {
      Word: "smile",
      Definitons: "to show happiness by pulling up the corners of your mouth",
    },
    {
      Word: "symptom",
      Definitons:
        "a change in someone or something that shows they have an illness or problem",
    },
    {
      Word: "revolution",
      Definitons:
        "a change in the way a country is governed, usually by violence or war; a complete change",
    },
    {
      Word: "amendment",
      Definitons: "a change, addition, or improvement to something",
    },
    {
      Word: "carbon",
      Definitons: "a chemical element (C) found in all living things",
    },
    {
      Word: "square",
      Definitons:
        "shape with four sides of equal length sides and four right (90°) angles",
    },
    {
      Word: "cousin",
      Definitons: "a child of your uncle or aunt",
    },
    {
      Word: "insight",
      Definitons: "a clear idea about how something works",
    },
    {
      Word: "orange",
      Definitons: "a color that is a mixture of red and yellow",
    },
    {
      Word: "tournament",
      Definitons:
        "a competition made up of a series of games between many competitors",
    },
    {
      Word: "bin",
      Definitons: "a container for storing things",
    },
    {
      Word: "stock",
      Definitons: "piece of a business bought in the form of shares",
    },
    {
      Word: "strongly",
      Definitons: "in a strong manner; in a very serious way",
    },
    {
      Word: "structure",
      Definitons: "way something is built, arranged, or organized",
    },
    {
      Word: "studio",
      Definitons:
        "the building or room where art is made, such as paintings, movies, or music",
    },
    {
      Word: "style",
      Definitons: "the particular way something is done or made",
    },
    {
      Word: "emotion",
      Definitons: "a feeling such as sadness, anger, or love",
    },
    {
      Word: "mother",
      Definitons: "a female who has a child or children",
    },
    {
      Word: "succeed",
      Definitons:
        "to finally achieve something that you were trying to achieve",
    },
    {
      Word: "slice",
      Definitons: "a flat piece of food that has been cut from a bigger piece",
    },
    {
      Word: "disk",
      Definitons: "a flat round object",
    },
    {
      Word: "resolution",
      Definitons:
        "a formal agreement or statement decided by a group of people",
    },
    {
      Word: "suspect",
      Definitons:
        " to think that someone may have committed a crime or done something wrong ",
    },
    {
      Word: "switch",
      Definitons:
        "to change from one thing to another; a thing you move to change from one thing to another",
    },
    {
      Word: "negotiation",
      Definitons: "a formal discussion to reach an agreement",
    },
    {
      Word: "welfare",
      Definitons: "a government program to help poor people",
    },
    {
      Word: "taste",
      Definitons:
        "the particular quality of food or drink that can be sensed by a person's mouth",
    },
    {
      Word: "tear",
      Definitons:
        "1. (v) to damage something by pulling it apart; 2. (n) drop of salty water from the eye",
    },
    {
      Word: "technology",
      Definitons: "use or knowledge of science in industry, engineering, etc.",
    },
    {
      Word: "family",
      Definitons: "a group of people who are related through blood",
    },
    {
      Word: "television",
      Definitons: "device that broadcasts programs, movies, or show",
    },
    {
      Word: "temperature",
      Definitons:
        "a measure of how hot or cold something is (e.g., the weather)",
    },
    {
      Word: "theory",
      Definitons: "idea or set of ideas that try to explain facts or events",
    },
    {
      Word: "species",
      Definitons: "a group of related animals or plant",
    },
    {
      Word: "dozen",
      Definitons: "a group of twelve people or things",
    },
    {
      Word: "tie",
      Definitons:
        "to join together two ends of string or rope; to join two or more things together with string or rope",
    },
    {
      Word: "phrase",
      Definitons:
        "a group of words that forms a unit and expresses a single meaning",
    },
    {
      Word: "tool",
      Definitons: "device used to make things (e.g., a hammer or driver)",
    },
    {
      Word: "touch",
      Definitons: "to feel an object with your fingers, etc.",
    },
    {
      Word: "gesture",
      Definitons:
        "a hand or body movement that expresses a particular idea or feeling",
    },
    {
      Word: "city",
      Definitons: "a heavily populated area with many buildings and roads",
    },
    {
      Word: "tradition",
      Definitons: "way of thinking, and behaving that was used for a long time",
    },
    {
      Word: "bell",
      Definitons:
        "a hollow metal object shaped like a cup that rings when it is hit",
    },
    {
      Word: "disorder",
      Definitons: "a lack of organization",
    },
    {
      Word: "troop",
      Definitons: "group of soldiers; an organized group",
    },
    {
      Word: "true",
      Definitons: "agreeing with the facts; not false; real or actual",
    },
    {
      Word: "chicken",
      Definitons: "a large bird that is raised on farms for its eggs and meat",
    },
    {
      Word: "union",
      Definitons:
        "organization of people or groups who have a similar interest or particular goal",
    },
    {
      Word: "user",
      Definitons: "person that uses a service or thing (e.g., a website)",
    },
    {
      Word: "variety",
      Definitons: "particular types of things or persons",
    },
    {
      Word: "convention",
      Definitons:
        "a large meeting of the members of a profession, organization, or who have the same interests",
    },
    {
      Word: "victim",
      Definitons:
        "person who has suffered from a crime, bad situation, or event",
    },
    {
      Word: "violence",
      Definitons: "use of physical force to harm someone or damage something",
    },
    {
      Word: "lot",
      Definitons: "A large quantity, or number taken together",
    },
    {
      Word: "truck",
      Definitons: "a large road vehicle used to carry things",
    },
    {
      Word: "wake",
      Definitons: "to stop sleeping; to make someone stop sleeping",
    },
    {
      Word: "mail",
      Definitons: "a letter, package, or email",
    },
    {
      Word: "wear",
      Definitons: "to have clothes, glasses, shoes, etc., on your body",
    },
    {
      Word: "weather",
      Definitons: "whether it is raining, sunny, cold, etc., outside",
    },
    {
      Word: "wed",
      Definitons: "to marry; to get married",
    },
    {
      Word: "west",
      Definitons: "the direction where the sun sets; opposite of east",
    },
    {
      Word: "agenda",
      Definitons: "a list of subjects that people will discuss at a meeting",
    },
    {
      Word: "gaze",
      Definitons: "a long continuous look at someone or something",
    },
    {
      Word: "far",
      Definitons: "a long way away",
    },
    {
      Word: "counter",
      Definitons:
        "a long, flat surface in a shop or kitchen where work is done",
    },
    {
      Word: "passage",
      Definitons: "a long, narrow area that connects one place to another",
    },
    {
      Word: "wood",
      Definitons:
        "hard material that trees are made of and is used for building and fuel",
    },
    {
      Word: "heavily",
      Definitons: "a lot or to a great degree",
    },
    {
      Word: "much",
      Definitons: "a lot; large amount; a high degree of",
    },
    {
      Word: "writer",
      Definitons: "professional who writes books, articles, etc.",
    },
    {
      Word: "aircraft",
      Definitons: "a machine that can fly",
    },
    {
      Word: "motor",
      Definitons: "a machine that uses energy to make something work or move",
    },
    {
      Word: "ability",
      Definitons: "power, money, knowledge, or skill to do something",
    },
    {
      Word: "cloud",
      Definitons:
        "a mass of water vapor in the sky, as when it is going to rain",
    },
    {
      Word: "leather",
      Definitons: "a material made from the skin of an animal",
    },
    {
      Word: "inch",
      Definitons: "a measure of length; 1/12 of a foot (2.54 centimeters)",
    },
    {
      Word: "above",
      Definitons: "in a higher place than something else",
    },
    {
      Word: "abortion",
      Definitons:
        "a medical operation to end the time when a female is going to have a baby",
    },
    {
      Word: "motion",
      Definitons: "a movement; the way something moves",
    },
    {
      Word: "web",
      Definitons: "a net made by spiders; many things connected together",
    },
    {
      Word: "absolutely",
      Definitons: "completely; totally; very",
    },
    {
      Word: "minority",
      Definitons:
        "a part of a group that is less than half of the whole; a small part",
    },
    {
      Word: "mechanism",
      Definitons:
        "a part or a set of parts of a machine that has a particular function",
    },
    {
      Word: "accept",
      Definitons: "to agree to receive or take something offered",
    },
    {
      Word: "edition",
      Definitons:
        "a particular version of something that is sold to the public",
    },
    {
      Word: "access",
      Definitons: "an entrance to a place; a way in",
    },
    {
      Word: "trail",
      Definitons: "a path through the countryside, often where people walk",
    },
    {
      Word: "circle",
      Definitons: "a perfectly round shape or a group arranged in that shape",
    },
    {
      Word: "accord",
      Definitons: "agreement or harmony",
    },
    {
      Word: "account",
      Definitons: "arrangement with a bank to keep your money for you",
    },
    {
      Word: "day",
      Definitons: "a period of 24 hours",
    },
    {
      Word: "era",
      Definitons:
        "a period of time in history that is special for a particular reason",
    },
    {
      Word: "achieve",
      Definitons: "to succeed in doing something good, usually by working hard",
    },
    {
      Word: "chairman",
      Definitons: "a person in charge of a meeting",
    },
    {
      Word: "manufacturer",
      Definitons: "a person or company that makes a product",
    },
    {
      Word: "acquire",
      Definitons: "to get or earn something by thinking or working",
    },
    {
      Word: "server",
      Definitons: "a person or thing that brings things to you when asked to",
    },
    {
      Word: "pilot",
      Definitons: "a person who controls an airplane, spacecraft, or boat",
    },
    {
      Word: "act",
      Definitons: "to behave in a certain way",
    },
    {
      Word: "action",
      Definitons: "something that a person or thing does",
    },
    {
      Word: "active",
      Definitons: "moving around a lot or doing many things",
    },
    {
      Word: "actor",
      Definitons: "person who acts in the theater, movies, or tv",
    },
    {
      Word: "actual",
      Definitons: "real or existing in fact, not imagined; real",
    },
    {
      Word: "lover",
      Definitons: "a person who likes someone or something very strongly",
    },
    {
      Word: "ad",
      Definitons: "public notice or advertisement",
    },
    {
      Word: "refugee",
      Definitons:
        "a person who ran away from his or her country because of war",
    },
    {
      Word: "addition",
      Definitons: "fact of adding something; thing that is added",
    },
    {
      Word: "additional",
      Definitons: "further or added",
    },
    {
      Word: "address",
      Definitons: "exact street location of a place",
    },
    {
      Word: "scholar",
      Definitons:
        "a person who studies and knows a lot about a particular subject",
    },
    {
      Word: "researcher",
      Definitons:
        "a person who studies something carefully to learn new information",
    },
    {
      Word: "terrorist",
      Definitons: "a person who uses fear or violence for a political purpose",
    },
    {
      Word: "admit",
      Definitons:
        "to agree that you did something bad, or that something bad is true",
    },
    {
      Word: "adopt",
      Definitons: "to take on responsibility for something",
    },
    {
      Word: "adult",
      Definitons: "person or animal that is fully grown",
    },
    {
      Word: "advance",
      Definitons: "to move forward in a certain direction",
    },
    {
      Word: "advantage",
      Definitons: "thing making the chance of success higher",
    },
    {
      Word: "servant",
      Definitons:
        "a person who works in another person's house and takes care of them",
    },
    {
      Word: "advertise",
      Definitons: "to show how good a product is, to make people buy",
    },
    {
      Word: "advice",
      Definitons: "suggestion about what someone should do",
    },
    {
      Word: "critic",
      Definitons:
        "a person whose job is to give opinions about books, movies, or other forms of art",
    },
    {
      Word: "rival",
      Definitons:
        "a person, team, or organization that competes with another; a competitor",
    },
    {
      Word: "affair",
      Definitons: "event or a set of events, often unpleasant ones",
    },
    {
      Word: "affect",
      Definitons: "to do something that changes something else",
    },
    {
      Word: "afford",
      Definitons: "to have enough money to pay for something",
    },
    {
      Word: "afraid",
      Definitons: "worried that something bad will happen; scared",
    },
    {
      Word: "advertisement",
      Definitons:
        "a picture, short film, text, etc., that tells people about a product or service",
    },
    {
      Word: "afternoon",
      Definitons: "time after 12:00 and before the evening meal",
    },
    {
      Word: "log",
      Definitons: "a piece of a tree that has been cut",
    },
    {
      Word: "draft",
      Definitons: "a piece of writing or plan that is not yet finished",
    },
    {
      Word: "drama",
      Definitons:
        "a piece of writing that tells a story about a serious subject or an exciting event",
    },
    {
      Word: "agency",
      Definitons: "business that provides some service for others",
    },
    {
      Word: "laboratory",
      Definitons: "a place for doing research and experiments",
    },
    {
      Word: "agent",
      Definitons: "person who can represent and decide for others",
    },
    {
      Word: "pub",
      Definitons: "a place that sells alcohol and food",
    },
    {
      Word: "shelter",
      Definitons: "a place to live or stay that protects someone from weather",
    },
    {
      Word: "agree",
      Definitons: "to have the same opinion as someone else",
    },
    {
      Word: "agreement",
      Definitons: "when you share the same opinion or reach a decision",
    },
    {
      Word: "resort",
      Definitons: "a place where people go on holiday",
    },
    {
      Word: "ahead",
      Definitons: "in or toward the front",
    },
    {
      Word: "aid",
      Definitons: "to provide things useful or needed by others",
    },
    {
      Word: "aim",
      Definitons: "act of pointing something at a target",
    },
    {
      Word: "air",
      Definitons: "mixture of gases around the earth that we breathe ",
    },
    {
      Word: "end",
      Definitons: "a point that marks the limit of something; finish",
    },
    {
      Word: "elderly",
      Definitons: "a polite word for 'old', used to describe people",
    },
    {
      Word: "platform",
      Definitons: "a raised area for people to stand on",
    },
    {
      Word: "panel",
      Definitons:
        "a rectangular piece of wood, metal, etc., that is a part of something bigger; a group of people who discuss something",
    },
    {
      Word: "rose",
      Definitons: "a red flower used to show love",
    },
    {
      Word: "chamber",
      Definitons: "a room or space inside something used for a special purpose",
    },
    {
      Word: "restriction",
      Definitons: "a rule or law that limits what people can do",
    },
    {
      Word: "storage",
      Definitons: "a safe place to keep something until it is needed",
    },
    {
      Word: "clause",
      Definitons:
        "a separate part of a contract, a will, or another legal document",
    },
    {
      Word: "uniform",
      Definitons:
        "a set of clothes that show you are part of a group or school",
    },
    {
      Word: "website",
      Definitons:
        "a set of internet pages that give information about a particular person or organization",
    },
    {
      Word: "alone",
      Definitons: "without anyone or anything else",
    },
    {
      Word: "dish",
      Definitons: "a shallow container for cooking or serving food",
    },
    {
      Word: "cooperation",
      Definitons:
        "a situation where everyone works together to get something done",
    },
    {
      Word: "cat",
      Definitons:
        "a small animal of the lion and tiger family with four legs and a tail that is kept as a pet",
    },
    {
      Word: "adjustment",
      Definitons: "a small change to make something function better",
    },
    {
      Word: "seed",
      Definitons:
        "a small object made by a plant from which a new plant can grow; the beginning of something",
    },
    {
      Word: "cigarette",
      Definitons: "a small paper tube filled with tobacco",
    },
    {
      Word: "alternative",
      Definitons: "other choices",
    },
    {
      Word: "tip",
      Definitons: "a small piece of advice; the end of something",
    },
    {
      Word: "chip",
      Definitons: "a small piece that was broken or taken off something",
    },
    {
      Word: "coin",
      Definitons: "a small, flat piece of metal used as money",
    },
    {
      Word: "amaze",
      Definitons: "to cause wonder; to surprise completely",
    },
    {
      Word: "gap",
      Definitons: "a space between two things",
    },
    {
      Word: "magic",
      Definitons: "a special power that allows impossible things to happen",
    },
    {
      Word: "amount",
      Definitons: "quantity of something",
    },
    {
      Word: "analysis",
      Definitons: "careful study to better understand something",
    },
    {
      Word: "mission",
      Definitons: "a special task or job that is given to a person or group",
    },
    {
      Word: "area",
      Definitons: "a specific section or space; part of a region",
    },
    {
      Word: "premise",
      Definitons:
        "a statement or idea that is accepted as being true and is used for developing other ideas and actions",
    },
    {
      Word: "equation",
      Definitons: "a statement showing things to be equal",
    },
    {
      Word: "faith",
      Definitons:
        "a strong belief that someone or something is honest and good",
    },
    {
      Word: "animal",
      Definitons: "a living creature that is not a plant or person",
    },
    {
      Word: "announce",
      Definitons: "to make a public statement about a plan, decision",
    },
    {
      Word: "castle",
      Definitons:
        "a strong building used in the past to protect people in times of war",
    },
    {
      Word: "annual",
      Definitons: "happening once a year, or every year",
    },
    {
      Word: "bias",
      Definitons:
        "a strong feeling not based on facts to believe one thing over another",
    },
    {
      Word: "stake",
      Definitons:
        "a strong stick with a pointed end that you push into the ground",
    },
    {
      Word: "fool",
      Definitons: "a stupid or silly person",
    },
    {
      Word: "emergency",
      Definitons: "a sudden serious event needing immediate action",
    },
    {
      Word: "chocolate",
      Definitons: "a sweet brown food made from cocoa beans",
    },
    {
      Word: "democracy",
      Definitons:
        "a system of government in which the people of a country can vote to elect who will govern them",
    },
    {
      Word: "anybody",
      Definitons: "any person; anyone",
    },
    {
      Word: "column",
      Definitons:
        "a tall post made of stone or wood used as a support in a building; one of two or more blocks of print that appear next to each other on a page",
    },
    {
      Word: "anyone",
      Definitons: "any person",
    },
    {
      Word: "professor",
      Definitons: "a teacher of high rank in a university or college",
    },
    {
      Word: "anyway",
      Definitons: "a word people use to change the topic of a conversation",
    },
    {
      Word: "apart",
      Definitons: "separated by an amount of time or space",
    },
    {
      Word: "toy",
      Definitons: "a thing that children play with",
    },
    {
      Word: "it",
      Definitons: "a thing that has been previously mentioned",
    },
    {
      Word: "absence",
      Definitons: "a time when you are not in a place where you should be",
    },
    {
      Word: "apparently",
      Definitons: "according to what you heard; from what can be seen",
    },
    {
      Word: "appeal",
      Definitons: "to request a judge or others change a decision",
    },
    {
      Word: "appear",
      Definitons: "to be seen, become visible; come into sight",
    },
    {
      Word: "port",
      Definitons:
        "a town or an area of a town next to water where ships arrive and leave from",
    },
    {
      Word: "appreciate",
      Definitons: "to be thankful for; to value or admire",
    },
    {
      Word: "approach",
      Definitons: "to get close to reaching something or somewhere",
    },
    {
      Word: "appropriate",
      Definitons: "right or suitable for some situation or purpose",
    },
    {
      Word: "metal",
      Definitons:
        "a type of hardy material that is usually hard and shiny that can be used to make things, such as iron, gold, or steel",
    },
    {
      Word: "approve",
      Definitons: "to have a positive opinion of someone or something",
    },
    {
      Word: "car",
      Definitons: "a vehicle with four wheels and engine that can carry things",
    },
    {
      Word: "bike",
      Definitons: "a vehicle with two wheels that a person can ride",
    },
    {
      Word: "plastic",
      Definitons:
        "a very common, light, strong material that can be formed into many different shapes and is made by a chemical process",
    },
    {
      Word: "argue",
      Definitons: "to give reasons for or against an idea or point of view",
    },
    {
      Word: "virus",
      Definitons:
        "a very small, basic living thing that causes disease or sickness",
    },
    {
      Word: "arm",
      Definitons: "part of your body from your shoulder to your hand",
    },
    {
      Word: "army",
      Definitons: "large group of soldiers organized to fight in wars",
    },
    {
      Word: "child",
      Definitons: "a very young person, between about 2 and 15",
    },
    {
      Word: "arrest",
      Definitons:
        "to use the law to catch and keep people who committed crimes",
    },
    {
      Word: "arrive",
      Definitons: "to reach the place you are travelling to",
    },
    {
      Word: "article",
      Definitons: "piece of writing about a particular subject",
    },
    {
      Word: "artist",
      Definitons:
        "a person who is skilled and creative in art, such as a painter",
    },
    {
      Word: "logic",
      Definitons: "a way of thinking by using facts and reasoning",
    },
    {
      Word: "blog",
      Definitons:
        "a website with regularly updated short articles and opinions about a particular topic ",
    },
    {
      Word: "victory",
      Definitons: "a win in a war, game, or competition",
    },
    {
      Word: "assess",
      Definitons: "to judge something's value or suitability",
    },
    {
      Word: "fence",
      Definitons: "a wooden or metal structure that separates an area",
    },
    {
      Word: "noun",
      Definitons:
        "a word that refers to a person, place, thing, quality, idea, or action",
    },
    {
      Word: "poem",
      Definitons: "a written composition in verse, not prose",
    },
    {
      Word: "association",
      Definitons: "organization of people with the same interest",
    },
    {
      Word: "assume",
      Definitons: "to believe, based on the evidence; suppose",
    },
    {
      Word: "index",
      Definitons:
        "a written or printed list of topics or words in a particular order",
    },
    {
      Word: "journal",
      Definitons: "a written record of subjects or events",
    },
    {
      Word: "cheese",
      Definitons: "a yellow or white food made from milk",
    },
    {
      Word: "initiative",
      Definitons:
        "ability to decide or act upon things yourself without depending on someone else",
    },
    {
      Word: "vision",
      Definitons: "ability to see things with your eyes",
    },
    {
      Word: "capable",
      Definitons: "able to do something; can do",
    },
    {
      Word: "attack",
      Definitons: "to try to destroy, beat, or injure",
    },
    {
      Word: "attempt",
      Definitons: "to try to do something challenging or difficult",
    },
    {
      Word: "attend",
      Definitons: "to be present at an event",
    },
    {
      Word: "mobile",
      Definitons: "able to move from one place to another",
    },
    {
      Word: "attention",
      Definitons: "focus of your thoughts on something",
    },
    {
      Word: "attract",
      Definitons: "to make someone notice and become interested in",
    },
    {
      Word: "efficient",
      Definitons: "able to work well without waste",
    },
    {
      Word: "over",
      Definitons: "above; across; more than; on the other side",
    },
    {
      Word: "suitable",
      Definitons: "acceptable or right for someone or something",
    },
    {
      Word: "recognition",
      Definitons: "accepting that something is true or that it exists",
    },
    {
      Word: "luck",
      Definitons: "accidental way things happen, often good things",
    },
    {
      Word: "available",
      Definitons: "present and able to be used",
    },
    {
      Word: "average",
      Definitons: "typical or normal; usual; ordinary",
    },
    {
      Word: "avoid",
      Definitons: "to prevent from happening, or stay away from",
    },
    {
      Word: "award",
      Definitons: "to give a prize for doing something well",
    },
    {
      Word: "aware",
      Definitons: "knowing or feeling that something exists",
    },
    {
      Word: "report",
      Definitons:
        "account of something which gives the necessary facts and information",
    },
    {
      Word: "participation",
      Definitons: "act of being involved in something",
    },
    {
      Word: "survival",
      Definitons: "act of continuing to exist when facing difficulty",
    },
    {
      Word: "baby",
      Definitons: "very young child, who cannot yet speak",
    },
    {
      Word: "background",
      Definitons: "images, color, or information behind the main one",
    },
    {
      Word: "limitation",
      Definitons: "act of controlling or reducing the size of something",
    },
    {
      Word: "opposition",
      Definitons: "act of disagreeing or trying to stop something",
    },
    {
      Word: "bag",
      Definitons: "soft container to put things in and carry with you",
    },
    {
      Word: "balance",
      Definitons: "to make two or more things equal",
    },
    {
      Word: "ball",
      Definitons: "small round object often used in a game or sport",
    },
    {
      Word: "expansion",
      Definitons: "act of expanding or becoming bigger",
    },
    {
      Word: "bank",
      Definitons: "a financial institution that keeps or lends money",
    },
    {
      Word: "acquisition",
      Definitons: "act of getting something",
    },
    {
      Word: "presentation",
      Definitons: "act of giving a formal talk about something",
    },
    {
      Word: "assistance",
      Definitons: "act of helping someone",
    },
    {
      Word: "basic",
      Definitons: "at the most important or easiest (beginner) level",
    },
    {
      Word: "basis",
      Definitons: "starting situation, fact, idea to develop from",
    },
    {
      Word: "announcement",
      Definitons: "act of informing people about something publicly",
    },
    {
      Word: "battle",
      Definitons: "military fight between armies",
    },
    {
      Word: "creation",
      Definitons: "act of making something",
    },
    {
      Word: "beach",
      Definitons: "large area of sand, next to an area of water",
    },
    {
      Word: "bear",
      Definitons: "large brown animal with fur that lives in forests",
    },
    {
      Word: "beat",
      Definitons: "to win against another person or team; defeat",
    },
    {
      Word: "beautiful",
      Definitons: "having very attractive or appealing physical qualities",
    },
    {
      Word: "registration",
      Definitons: "act of recording information on an official list",
    },
    {
      Word: "development",
      Definitons: "act or process of growing bigger or more advanced",
    },
    {
      Word: "involvement",
      Definitons: "act or process of joining in a particular activity",
    },
    {
      Word: "bed",
      Definitons: "a piece of furniture that people sleep on",
    },
    {
      Word: "legislation",
      Definitons: "act or process of writing and passing laws",
    },
    {
      Word: "infection",
      Definitons: "act or state of becoming infected with a disease",
    },
    {
      Word: "transportation",
      Definitons:
        "act, system, or business of moving people or goods from one place to another",
    },
    {
      Word: "laughter",
      Definitons: "action or sound of laughing",
    },
    {
      Word: "behavior",
      Definitons: "way a person or thing acts; manner",
    },
    {
      Word: "behind",
      Definitons: "in or toward the back",
    },
    {
      Word: "sanction",
      Definitons: "action taken to force a country to obey laws",
    },
    {
      Word: "entertainment",
      Definitons:
        "activities that make people have a good time by singing, telling jokes, etc.",
    },
    {
      Word: "belong",
      Definitons: "to be a member of a particular group and feel welcomed",
    },
    {
      Word: "below",
      Definitons: "in a lower position, place, or level",
    },
    {
      Word: "venture",
      Definitons: "activity that involves taking chances or risks",
    },
    {
      Word: "game",
      Definitons: "activity with rules that people play to have fun",
    },
    {
      Word: "work",
      Definitons: "activity you do in order to make money",
    },
    {
      Word: "benefit",
      Definitons: "good result or effect, something advantageous",
    },
    {
      Word: "real",
      Definitons: "actually existing or happening, not imagined",
    },
    {
      Word: "woman",
      Definitons: "adult female human being",
    },
    {
      Word: "privilege",
      Definitons:
        "advantage or right that is given to only a certain person or group of people",
    },
    {
      Word: "anxious",
      Definitons: "afraid of what may happen; worried and nervous",
    },
    {
      Word: "beyond",
      Definitons: "on or to the farther side; in addition to",
    },
    {
      Word: "subsequently",
      Definitons: "after something else has happened",
    },
    {
      Word: "breath",
      Definitons: "air you take in and out of your body",
    },
    {
      Word: "beer",
      Definitons: "alcoholic drink that is made from wheat or grains",
    },
    {
      Word: "universe",
      Definitons: "all of space and everything in it",
    },
    {
      Word: "bill",
      Definitons: "piece of paper showing what you have to pay",
    },
    {
      Word: "world",
      Definitons: "all the humans, events, activities on the earth",
    },
    {
      Word: "membership",
      Definitons: "all the people who belong to a club or group",
    },
    {
      Word: "bird",
      Definitons: "animal with feathers that uses wings to fly",
    },
    {
      Word: "household",
      Definitons: "all the people who live in a house; a family",
    },
    {
      Word: "virtually",
      Definitons: "almost completely",
    },
    {
      Word: "black",
      Definitons: "color of the sky on a dark night",
    },
    {
      Word: "barely",
      Definitons: "almost not possible or does not happen",
    },
    {
      Word: "though",
      Definitons: "although, despite the fact that",
    },
    {
      Word: "expenditure",
      Definitons: "amount of money used during a certain time",
    },
    {
      Word: "block",
      Definitons: "to stop from going forward or making progress",
    },
    {
      Word: "blood",
      Definitons: "red liquid in the bodies of people and animals",
    },
    {
      Word: "output",
      Definitons: "amount of something that is produced",
    },
    {
      Word: "blow",
      Definitons: "to move something using air",
    },
    {
      Word: "blue",
      Definitons: "color of the clear sky",
    },
    {
      Word: "board",
      Definitons: "surface for posting or showing information",
    },
    {
      Word: "boat",
      Definitons: "small form of transport for traveling on water",
    },
    {
      Word: "body",
      Definitons: "a person's physical self",
    },
    {
      Word: "quantity",
      Definitons: "amount or number of something",
    },
    {
      Word: "excess",
      Definitons: "amount that is more than necessary",
    },
    {
      Word: "story",
      Definitons: "an account or description of how something happened",
    },
    {
      Word: "man",
      Definitons: "an adult male human being",
    },
    {
      Word: "compromise",
      Definitons: "an agreement in which each side must give up some things",
    },
    {
      Word: "discount",
      Definitons: "an amount of money taken off the usual price of something",
    },
    {
      Word: "layer",
      Definitons: "an amount of something that is spread over a surface",
    },
    {
      Word: "deficit",
      Definitons: "an amount that is less than needed",
    },
    {
      Word: "rat",
      Definitons: "an animal that looks like a large mouse",
    },
    {
      Word: "bottom",
      Definitons: "lowest part of something; part on which it rests",
    },
    {
      Word: "country",
      Definitons: "an area of land that is controlled by a government",
    },
    {
      Word: "box",
      Definitons: "a container with (usually) four straight sides and a lid",
    },
    {
      Word: "boy",
      Definitons: "a young male person",
    },
    {
      Word: "brain",
      Definitons: "part of the head that thinks and controls your body",
    },
    {
      Word: "slope",
      Definitons: "an area of land that is higher on one side than the other",
    },
    {
      Word: "hill",
      Definitons:
        "an area of land that is higher than the land around it but smaller than a mountain",
    },
    {
      Word: "county",
      Definitons:
        "an area within a country or a state with its own local government",
    },
    {
      Word: "contest",
      Definitons: "an event in which people try to win",
    },
    {
      Word: "adventure",
      Definitons: "an exciting and often dangerous experience",
    },
    {
      Word: "brief",
      Definitons: "short; using few words",
    },
    {
      Word: "adviser",
      Definitons: "an expert who suggests what someone should do",
    },
    {
      Word: "bright",
      Definitons: "producing a lot of light",
    },
    {
      Word: "interpretation",
      Definitons: "an explanation or opinion of the meaning of something",
    },
    {
      Word: "wound",
      Definitons:
        "an injury to the body that is caused when something breaks the skin",
    },
    {
      Word: "broad",
      Definitons: "wide; from the shorter two sides to the other",
    },
    {
      Word: "bid",
      Definitons: "an offer to pay a particular amount of money for something",
    },
    {
      Word: "brother",
      Definitons: "a boy or man who shares a parent with you",
    },
    {
      Word: "settlement",
      Definitons:
        "an official agreement that ends an argument or fight between people or groups",
    },
    {
      Word: "sequence",
      Definitons: "an ordered group of related events or things",
    },
    {
      Word: "budget",
      Definitons: "amount of money planned to be spent on something",
    },
    {
      Word: "creature",
      Definitons: "animal of any type",
    },
    {
      Word: "hell",
      Definitons: "any place of pain and suffering",
    },
    {
      Word: "burn",
      Definitons: "to destroy with fire",
    },
    {
      Word: "unlike",
      Definitons: "appearing or being different",
    },
    {
      Word: "neighborhood",
      Definitons: "area of a town or city that people live in",
    },
    {
      Word: "bus",
      Definitons: "a large road vehicle used for carrying many people",
    },
    {
      Word: "busy",
      Definitons: "working hard doing something; full of activity",
    },
    {
      Word: "shade",
      Definitons: "area of darkness where something stops the light",
    },
    {
      Word: "territory",
      Definitons:
        "area of land or ocean owned or controlled by a government or person",
    },
    {
      Word: "desert",
      Definitons: "area of land that has very little water and few plants",
    },
    {
      Word: "zone",
      Definitons: "area of space used for a particular reason",
    },
    {
      Word: "harbor",
      Definitons: "area of water protected by land and used by ships",
    },
    {
      Word: "province",
      Definitons: "area that a country or nation is divided into",
    },
    {
      Word: "dispute",
      Definitons: "argument between two or more parties about something",
    },
    {
      Word: "camera",
      Definitons: "object that takes pictures digitally, or on film",
    },
    {
      Word: "camp",
      Definitons: "place where people live for a short time in tents",
    },
    {
      Word: "approximately",
      Definitons: "around; nearly; almost; about (a number)",
    },
    {
      Word: "naturally",
      Definitons: "as someone would expect; not surprising",
    },
    {
      Word: "cancer",
      Definitons: "any growth caused by abnormal cell division",
    },
    {
      Word: "even",
      Definitons: "as well; too",
    },
    {
      Word: "what",
      Definitons: "asking for information about someone or something",
    },
    {
      Word: "league",
      Definitons:
        "association of sports teams that organizes matches for its members",
    },
    {
      Word: "capacity",
      Definitons: "ability to hold, involve or contain people or things",
    },
    {
      Word: "capital",
      Definitons: "main, or major",
    },
    {
      Word: "along",
      Definitons: "at a point on a line",
    },
    {
      Word: "ago",
      Definitons: "at a specified length of time in the past",
    },
    {
      Word: "card",
      Definitons: "small piece of paper or plastic used as i.d.",
    },
    {
      Word: "before",
      Definitons: "at a time earlier than the present; previously",
    },
    {
      Word: "career",
      Definitons: "particular occupation in professional life",
    },
    {
      Word: "soon",
      Definitons: "at a time not long from now",
    },
    {
      Word: "carefully",
      Definitons: "in a manner that involves focus and care",
    },
    {
      Word: "always",
      Definitons: "at all times; in every situation",
    },
    {
      Word: "carry",
      Definitons: "to hold something and move it to another place",
    },
    {
      Word: "young",
      Definitons: "at an early stage of existence; not mature",
    },
    {
      Word: "cash",
      Definitons: "physical money (not credit card or digital)",
    },
    {
      Word: "whenever",
      Definitons: "at any or every time that",
    },
    {
      Word: "ever",
      Definitons: "at any time; at all times in the future",
    },
    {
      Word: "originally",
      Definitons: "at first; in the beginning",
    },
    {
      Word: "meanwhile",
      Definitons: "at or during the same time; in the meantime",
    },
    {
      Word: "catch",
      Definitons: "use your hands to stop and hold something flying",
    },
    {
      Word: "category",
      Definitons: "groups of things that are similar in some way",
    },
    {
      Word: "during",
      Definitons: "at some point in the course of an event or thing",
    },
    {
      Word: "then",
      Definitons: "at that time not now",
    },
    {
      Word: "cell",
      Definitons: "short for 'cellphone'",
    },
    {
      Word: "initially",
      Definitons: "at the beginning",
    },
    {
      Word: "central",
      Definitons: "being in the middle",
    },
    {
      Word: "century",
      Definitons: "period of 100 years",
    },
    {
      Word: "now",
      Definitons: "at the present time or moment",
    },
    {
      Word: "certain",
      Definitons: "being sure about something; without doubt",
    },
    {
      Word: "chair",
      Definitons:
        "a piece of furniture you sit on when sitting at a table or desk",
    },
    {
      Word: "nowadays",
      Definitons: "at the present time; now",
    },
    {
      Word: "challenge",
      Definitons: "an activity you wish to try that may be hard to do",
    },
    {
      Word: "regularly",
      Definitons: "at the usual time each day, week, or month",
    },
    {
      Word: "fascinate",
      Definitons: "attract or interest greatly",
    },
    {
      Word: "moderate",
      Definitons: "average in size or amount",
    },
    {
      Word: "chance",
      Definitons: "possibility that something will happen",
    },
    {
      Word: "out",
      Definitons: "away from the inside or center",
    },
    {
      Word: "chapter",
      Definitons: "one of the main sections of a book",
    },
    {
      Word: "character",
      Definitons: "your personality or nature",
    },
    {
      Word: "charge",
      Definitons: "to ask for money as a price for a service or goods",
    },
    {
      Word: "tail",
      Definitons: "back end of an animal's body that sticks out",
    },
    {
      Word: "storm",
      Definitons: "bad weather with a lot of rain, snow, and strong winds",
    },
    {
      Word: "bread",
      Definitons: "baked food made from flour, used in sandwiches, etc.",
    },
    {
      Word: "belt",
      Definitons: "band of material worn around a person's waist",
    },
    {
      Word: "truly",
      Definitons: "based on truth or fact or reality",
    },
    {
      Word: "cheap",
      Definitons: "not costing a lot of money",
    },
    {
      Word: "check",
      Definitons: "to confirm the details of something are correct",
    },
    {
      Word: "liquid",
      Definitons:
        "basic state of things that is similar to water; not solid or gas",
    },
    {
      Word: "framework",
      Definitons: "basic structure of something",
    },
    {
      Word: "firstly",
      Definitons: "before anything else",
    },
    {
      Word: "aggressive",
      Definitons: "behaving in a very threatening way",
    },
    {
      Word: "chief",
      Definitons: "most important one",
    },
    {
      Word: "equivalent",
      Definitons: "being about equal in value, use, or meaning",
    },
    {
      Word: "mature",
      Definitons: "being an adult, being fully developed physically",
    },
    {
      Word: "smart",
      Definitons: "being clever, having a good mind",
    },
    {
      Word: "choice",
      Definitons: "decision between two or more possibilities",
    },
    {
      Word: "choose",
      Definitons: "to select; decide between several possibilities",
    },
    {
      Word: "prompt",
      Definitons: "being done quickly and with no delay",
    },
    {
      Word: "circumstance",
      Definitons: "condition or fact that affects a situation",
    },
    {
      Word: "keen",
      Definitons: "being eager or excited for something to happen",
    },
    {
      Word: "citizen",
      Definitons: "person who belongs to and has rights in a country",
    },
    {
      Word: "native",
      Definitons: "being from or living in the place where you were born",
    },
    {
      Word: "eastern",
      Definitons: "being in the area to the east",
    },
    {
      Word: "claim",
      Definitons: "to say something is true when others may not agree",
    },
    {
      Word: "in",
      Definitons: "being inside something",
    },
    {
      Word: "no",
      Definitons: "being none; not having or being",
    },
    {
      Word: "contemporary",
      Definitons: "being of the time being discussed",
    },
    {
      Word: "clean",
      Definitons: "being free from dirt or marks because it was washed",
    },
    {
      Word: "poverty",
      Definitons: "being poor",
    },
    {
      Word: "clearly",
      Definitons: "in a way that is easy to understand; obviously",
    },
    {
      Word: "genuine",
      Definitons: "being real, actual, and not false",
    },
    {
      Word: "climb",
      Definitons: "to rise gradually and steadily to a higher point",
    },
    {
      Word: "record",
      Definitons: "being the highest or most extreme level achieved in an area",
    },
    {
      Word: "clock",
      Definitons: "a device that shows the time",
    },
    {
      Word: "vast",
      Definitons: "being very large in size or amount",
    },
    {
      Word: "idea",
      Definitons: "belief, thought, suggestion, opinion, or plan",
    },
    {
      Word: "of",
      Definitons: "belonging to or connected with something",
    },
    {
      Word: "club",
      Definitons: "group of people who share an interest, as in sport",
    },
    {
      Word: "coach",
      Definitons: "person who teaches others how to do (sport, job) ",
    },
    {
      Word: "historic",
      Definitons:
        "belonging to the past; of what is important or famous in the past",
    },
    {
      Word: "extraordinary",
      Definitons: "beyond what is ordinary; very unusual; remarkable",
    },
    {
      Word: "corporation",
      Definitons: "big company or a combination of several companies",
    },
    {
      Word: "code",
      Definitons: "a password made of a set of letters or numbers",
    },
    {
      Word: "coffee",
      Definitons: "a brown drink made from roasted beans and boiled water",
    },
    {
      Word: "large",
      Definitons: "big; of great size; broad, tall, wide, long, or fat",
    },
    {
      Word: "cold",
      Definitons: "having a very low temperature",
    },
    {
      Word: "hand",
      Definitons: "body part at the end of a person's arm",
    },
    {
      Word: "collect",
      Definitons: "to gather things/people together in one place",
    },
    {
      Word: "collection",
      Definitons: "group of similar things gathered as a hobby",
    },
    {
      Word: "college",
      Definitons: "school or educational institution for adults",
    },
    {
      Word: "fiction",
      Definitons:
        "book or story including ideas, people, and events that are not real",
    },
    {
      Word: "combine",
      Definitons: "to mix several things together to form one thing",
    },
    {
      Word: "album",
      Definitons: "book with a collection of photographs or pictures",
    },
    {
      Word: "mystery",
      Definitons:
        "book, play, or film that deals with a solution of a strange crime",
    },
    {
      Word: "comfortable",
      Definitons: "not being worried about something; at ease",
    },
    {
      Word: "commercial",
      Definitons: "radio or television advertisement",
    },
    {
      Word: "commit",
      Definitons: "to do something bad, usually a crime",
    },
    {
      Word: "committee",
      Definitons: "group of people who do or decide something",
    },
    {
      Word: "common",
      Definitons: "typical, normal; not unusual",
    },
    {
      Word: "uncle",
      Definitons:
        "brother of your father or mother or the husband of your aunt",
    },
    {
      Word: "communication",
      Definitons: "talking to people; giving information to people",
    },
    {
      Word: "community",
      Definitons: "group of people who share a common idea or area",
    },
    {
      Word: "house",
      Definitons: "building in which a family, person lives",
    },
    {
      Word: "compare",
      Definitons: "to consider how similar and different things are",
    },
    {
      Word: "comparison",
      Definitons:
        "looking for differences and similarities in two or more things",
    },
    {
      Word: "office",
      Definitons:
        "building of set of rooms used to do business or professional activities",
    },
    {
      Word: "school",
      Definitons: "building where you learn in classes with a teacher",
    },
    {
      Word: "competition",
      Definitons: "fighting against others when trying to win something",
    },
    {
      Word: "publisher",
      Definitons: "business that produces books or magazines",
    },
    {
      Word: "personally",
      Definitons: "by a specific person, and not by anyone else",
    },
    {
      Word: "complete",
      Definitons: "to finish or reach the end of doing something",
    },
    {
      Word: "completely",
      Definitons: "in every way or as much as possible",
    },
    {
      Word: "complex",
      Definitons: "difficult, not easy to understand or explain",
    },
    {
      Word: "via",
      Definitons: "by going through, by way of",
    },
    {
      Word: "widely",
      Definitons: "by or among a large number of people",
    },
    {
      Word: "beside",
      Definitons: "by the side of something; next to something",
    },
    {
      Word: "flexible",
      Definitons: "capable of being easily bent or changed without breaking",
    },
    {
      Word: "observation",
      Definitons:
        "careful watching and listening; remark or comment on something you have noticed",
    },
    {
      Word: "pleasant",
      Definitons: "causing a good feeling",
    },
    {
      Word: "controversial",
      Definitons: "causing a great deal of argument, discussion, or conflict",
    },
    {
      Word: "fortune",
      Definitons: "chance or luck, particularly good luck",
    },
    {
      Word: "effect",
      Definitons: "change brought about by a cause; result",
    },
    {
      Word: "computer",
      Definitons:
        "a machine for storing information and accessing the internet",
    },
    {
      Word: "infant",
      Definitons: "child in the beginning stage of life; a baby",
    },
    {
      Word: "concept",
      Definitons: "abstract idea of something or how it works",
    },
    {
      Word: "random",
      Definitons: "chosen or done without a plan or pattern",
    },
    {
      Word: "concert",
      Definitons:
        "musical entertainment given in public by one or more performers",
    },
    {
      Word: "conclude",
      Definitons: "to stop or finish; to come to the end of something",
    },
    {
      Word: "conclusion",
      Definitons: "judgment or opinion after thinking for a while",
    },
    {
      Word: "distinct",
      Definitons: "clearly different in nature from something else",
    },
    {
      Word: "conduct",
      Definitons: "to direct, lead or guide something",
    },
    {
      Word: "confidence",
      Definitons: "feeling that you can do well at something",
    },
    {
      Word: "coat",
      Definitons: "clothing worn outside over your normal clothes",
    },
    {
      Word: "confirm",
      Definitons: "to provide evidence to establish the truth of",
    },
    {
      Word: "conflict",
      Definitons: "to have opposite ideas; to disagree; to not match",
    },
    {
      Word: "money",
      Definitons: "coins or notes we use to pay for things",
    },
    {
      Word: "information",
      Definitons: "collection of facts and details about something",
    },
    {
      Word: "connect",
      Definitons: "to join or attach things together",
    },
    {
      Word: "connection",
      Definitons: "something that joins things together; being joined",
    },
    {
      Word: "consequence",
      Definitons: "outcome of an event; result",
    },
    {
      Word: "gray",
      Definitons: "color between black and white",
    },
    {
      Word: "yellow",
      Definitons: "color of lemons or the sun",
    },
    {
      Word: "carpet",
      Definitons: "colored floor covering made of wool or other material",
    },
    {
      Word: "first",
      Definitons: "coming before all others in time or place",
    },
    {
      Word: "consideration",
      Definitons: "careful thought; thinking about something",
    },
    {
      Word: "consist",
      Definitons: "to have as an essential, necessary or main part",
    },
    {
      Word: "western",
      Definitons: "coming from, found in, or facing towards the west",
    },
    {
      Word: "airline",
      Definitons: "company that flies passengers in its planes",
    },
    {
      Word: "absolute",
      Definitons: "complete and total",
    },
    {
      Word: "whole",
      Definitons: "complete or full; all of ",
    },
    {
      Word: "altogether",
      Definitons: "completely and fully",
    },
    {
      Word: "construction",
      Definitons: "act of building something; thing that is built",
    },
    {
      Word: "exact",
      Definitons: "completely correct; accurate; specific",
    },
    {
      Word: "all",
      Definitons: "completely; totally",
    },
    {
      Word: "literary",
      Definitons: "concerned with written works",
    },
    {
      Word: "consumer",
      Definitons: "person who uses goods or services; individual buyer",
    },
    {
      Word: "contact",
      Definitons: "to get in touch with someone",
    },
    {
      Word: "contain",
      Definitons: "to hold something inside something else",
    },
    {
      Word: "urban",
      Definitons: "concerning a city; located in a city",
    },
    {
      Word: "royal",
      Definitons: "concerning a king or queen",
    },
    {
      Word: "context",
      Definitons: "set of facts surrounding a person or event",
    },
    {
      Word: "institutional",
      Definitons:
        "concerning a large organization such as a hospital or university",
    },
    {
      Word: "presumably",
      Definitons: "concerning a true or likely nature",
    },
    {
      Word: "contrast",
      Definitons: "to compare; to show clear, obvious differences",
    },
    {
      Word: "contribution",
      Definitons: "helping a cause by giving money, things, services",
    },
    {
      Word: "agricultural",
      Definitons: "concerning farming",
    },
    {
      Word: "organic",
      Definitons: "concerning food made with few or no chemicals",
    },
    {
      Word: "political",
      Definitons: "concerning government or public affairs",
    },
    {
      Word: "classical",
      Definitons: "concerning ideas considered to be traditional",
    },
    {
      Word: "conversation",
      Definitons: "when you talk with other people; discussion or chat",
    },
    {
      Word: "sexual",
      Definitons: "concerning physical activity that can produce babies",
    },
    {
      Word: "convince",
      Definitons: "to persuade someone, or make them feel sure",
    },
    {
      Word: "cook",
      Definitons: "to heat food until it is ready to eat",
    },
    {
      Word: "cool",
      Definitons: "almost cold; not warm or hot",
    },
    {
      Word: "public",
      Definitons: "concerning society in general",
    },
    {
      Word: "abstract",
      Definitons: "concerning something that doesn't exist physically",
    },
    {
      Word: "copy",
      Definitons: "to make something that looks the same as the original",
    },
    {
      Word: "corporate",
      Definitons: "concerning (usually large) companies",
    },
    {
      Word: "retail",
      Definitons:
        "concerning the business of selling products to the public for personal use",
    },
    {
      Word: "correct",
      Definitons: "true or accurate",
    },
    {
      Word: "inner",
      Definitons: "concerning the inside part of something",
    },
    {
      Word: "mental",
      Definitons: "concerning the mind",
    },
    {
      Word: "genetic",
      Definitons:
        "concerning the parts of a cell that determine particular characteristics",
    },
    {
      Word: "online",
      Definitons: "connected to the internet",
    },
    {
      Word: "council",
      Definitons: "group chosen to make decisions about something",
    },
    {
      Word: "ethnic",
      Definitons: "connected with people who share a cultural tradition",
    },
    {
      Word: "count",
      Definitons: "to add things together to find the total number",
    },
    {
      Word: "tank",
      Definitons: "container for holding liquid or gas",
    },
    {
      Word: "inflation",
      Definitons: "continual rise in the prices of products",
    },
    {
      Word: "temporary",
      Definitons: "continuing for a limited time, not permanent",
    },
    {
      Word: "couple",
      Definitons: "two of something; two people; a pair",
    },
    {
      Word: "court",
      Definitons: "large, flat area, to play tennis or basketball",
    },
    {
      Word: "dialog",
      Definitons: "conversation between two or more individuals",
    },
    {
      Word: "cover",
      Definitons: "thing you put over something to close or hide it",
    },
    {
      Word: "accurate",
      Definitons: "correct; not having mistakes or errors",
    },
    {
      Word: "free",
      Definitons: "costing no money",
    },
    {
      Word: "policy",
      Definitons: "course of action proposed by an organization, etc.",
    },
    {
      Word: "envelope",
      Definitons: "cover for a letter or card",
    },
    {
      Word: "roof",
      Definitons: "cover or top of something",
    },
    {
      Word: "wet",
      Definitons: "covered or soaked with a liquid; not dry",
    },
    {
      Word: "bloody",
      Definitons: "covered or spotted with blood on the surface",
    },
    {
      Word: "offense",
      Definitons: "criminal act; something that causes hurt",
    },
    {
      Word: "festival",
      Definitons: "cultural event with a program of events",
    },
    {
      Word: "credit",
      Definitons: "system to buy something and pay for it later",
    },
    {
      Word: "hook",
      Definitons: "curved or bent tool",
    },
    {
      Word: "crisis",
      Definitons: "unstable situation of extreme danger or difficulty",
    },
    {
      Word: "critical",
      Definitons: "being important or serious; vital; dangerous",
    },
    {
      Word: "destruction",
      Definitons: "damaging something so badly that it no longer exists",
    },
    {
      Word: "coal",
      Definitons: "dark hard substance from the earth burnt as a fuel",
    },
    {
      Word: "cross",
      Definitons: "to meet at one point",
    },
    {
      Word: "crowd",
      Definitons: "large group of people together in one place",
    },
    {
      Word: "pot",
      Definitons: "deep, round container that is used for cooking",
    },
    {
      Word: "cry",
      Definitons: "to produce tears and sounds because of pain",
    },
    {
      Word: "culture",
      Definitons: "beliefs and customs of a particular group",
    },
    {
      Word: "cup",
      Definitons: "small round container used to hold liquids for drinking",
    },
    {
      Word: "profile",
      Definitons:
        "description listing the basic information about a person or group",
    },
    {
      Word: "current",
      Definitons: "happening or being in the present time",
    },
    {
      Word: "currently",
      Definitons: "happening or being in the present time",
    },
    {
      Word: "reliable",
      Definitons: "deserving of your trust, dependable",
    },
    {
      Word: "architecture",
      Definitons: "design and construction of buildings",
    },
    {
      Word: "customer",
      Definitons: "someone who buys goods or services from a business",
    },
    {
      Word: "cut",
      Definitons: "to use a knife or scissors to divide or open the surface",
    },
    {
      Word: "cycle",
      Definitons: "series of regular and repeated actions",
    },
    {
      Word: "although",
      Definitons: "despite the fact that; however",
    },
    {
      Word: "daily",
      Definitons: "happening every day",
    },
    {
      Word: "damage",
      Definitons: "physical harm that is done to something",
    },
    {
      Word: "explanation",
      Definitons: "details or reasons given to make something clear",
    },
    {
      Word: "dance",
      Definitons: "to move your body rhythmically to music",
    },
    {
      Word: "danger",
      Definitons: "possibility of getting hurt, damaged, or killed",
    },
    {
      Word: "dangerous",
      Definitons: "involving the chance of hurt or damage; risky",
    },
    {
      Word: "criteria",
      Definitons: "details used to make a decision",
    },
    {
      Word: "dark",
      Definitons: "having little or no light; not light in color",
    },
    {
      Word: "filter",
      Definitons: "device to remove unwanted substances from a liquid or gas",
    },
    {
      Word: "data",
      Definitons: "facts or information used to calculate or analyze",
    },
    {
      Word: "unusual",
      Definitons:
        "different from what is ordinary or normal in a way that attracts attention; not usual",
    },
    {
      Word: "date",
      Definitons: "a day in the calendar such as January 3rd",
    },
    {
      Word: "daughter",
      Definitons: "a female child of someone",
    },
    {
      Word: "hard",
      Definitons: "difficult to bend, break or cut; solid",
    },
    {
      Word: "dead",
      Definitons: "not alive",
    },
    {
      Word: "pollution",
      Definitons: "dirty or dangerous waste released into an environment",
    },
    {
      Word: "dear",
      Definitons: "loved or valued very much",
    },
    {
      Word: "death",
      Definitons: "when someone dies; the end of life",
    },
    {
      Word: "debate",
      Definitons: "general public discussion of a topic",
    },
    {
      Word: "decade",
      Definitons: "period of 10 years",
    },
    {
      Word: "mess",
      Definitons: "dirty or untidy area",
    },
    {
      Word: "decision",
      Definitons: "a choice you make about something after thinking about it",
    },
    {
      Word: "depth",
      Definitons: "distance below a surface",
    },
    {
      Word: "decline",
      Definitons: "to not accept an invitation or offer; refuse",
    },
    {
      Word: "deep",
      Definitons: "going far down from the surface",
    },
    {
      Word: "height",
      Definitons: "distance of something from the bottom to the top",
    },
    {
      Word: "phase",
      Definitons: "distinct part or step in a process",
    },
    {
      Word: "defense",
      Definitons: "process of protecting something from attack",
    },
    {
      Word: "injure",
      Definitons: "do physical harm or damage",
    },
    {
      Word: "define",
      Definitons: "to explain the meaning of words",
    },
    {
      Word: "definitely",
      Definitons: "without question; beyond doubt",
    },
    {
      Word: "definition",
      Definitons: "explanation of word's meaning, as in dictionaries",
    },
    {
      Word: "degree",
      Definitons: "unit for measuring temperature or angles",
    },
    {
      Word: "deliver",
      Definitons: "to take something to a person or place",
    },
    {
      Word: "delivery",
      Definitons: "act of taking something to a person or place",
    },
    {
      Word: "demand",
      Definitons: "to strongly request someone to do something; insist",
    },
    {
      Word: "helpful",
      Definitons: "doing things that help someone",
    },
    {
      Word: "universal",
      Definitons: "done or experienced by everyone",
    },
    {
      Word: "voluntary",
      Definitons: "done or given by their own will and not forced to do",
    },
    {
      Word: "violent",
      Definitons: "done with force; likely to cause physical damage",
    },
    {
      Word: "deny",
      Definitons: "to refuse to allow or accept something",
    },
    {
      Word: "department",
      Definitons: "division of a larger part or organization",
    },
    {
      Word: "depend",
      Definitons: "to need (someone or something) for support, help, etc.",
    },
    {
      Word: "immediate",
      Definitons: "done without delay; straight away",
    },
    {
      Word: "chart",
      Definitons: "drawing showing information in a clear way",
    },
    {
      Word: "alcohol",
      Definitons: "drinks such as wine, whiskey, beer",
    },
    {
      Word: "fall",
      Definitons: "dropping from a standing position to the ground",
    },
    {
      Word: "describe",
      Definitons: "to tell someone the appearance, sound or smell of something",
    },
    {
      Word: "description",
      Definitons:
        "something that tells you what something is like or looks like",
    },
    {
      Word: "while",
      Definitons: "during the time that; at the same time",
    },
    {
      Word: "whilst",
      Definitons: "during the time that; at the same time",
    },
    {
      Word: "design",
      Definitons: "to plan in a particular way to fulfill a purpose",
    },
    {
      Word: "sensitive",
      Definitons: "easily hurt or damaged",
    },
    {
      Word: "desk",
      Definitons: "a piece of furniture like a table often with drawers",
    },
    {
      Word: "despite",
      Definitons: "without being affected by something; in spite of",
    },
    {
      Word: "visible",
      Definitons: "easily seen or understood",
    },
    {
      Word: "detail",
      Definitons: "small part of something; tiny fact",
    },
    {
      Word: "soft",
      Definitons: "easy to press, bend or cut; not hard or firm",
    },
    {
      Word: "apparent",
      Definitons: "easy to see or clearly understand",
    },
    {
      Word: "determine",
      Definitons: "to control exactly how something will be or act",
    },
    {
      Word: "clear",
      Definitons: "easy to understand; well-explained; obvious",
    },
    {
      Word: "potato",
      Definitons: "edible vegetable",
    },
    {
      Word: "device",
      Definitons: "object, machine, or equipment for a specific use",
    },
    {
      Word: "impression",
      Definitons: "effect or feeling resulting from an experience",
    },
    {
      Word: "mood",
      Definitons: "emotion or a state of mind; how you feel",
    },
    {
      Word: "die",
      Definitons: "to stop living",
    },
    {
      Word: "electricity",
      Definitons: "energy generated positive and negative charges",
    },
    {
      Word: "adequate",
      Definitons: "enough; good enough for what is needed",
    },
    {
      Word: "difference",
      Definitons: "not of the same kind; unlike other things",
    },
    {
      Word: "enough",
      Definitons: "equal to what is needed; as much as required",
    },
    {
      Word: "each",
      Definitons: "every one of two or more things",
    },
    {
      Word: "difficult",
      Definitons: "hard; not easy; you need to work hard to do it",
    },
    {
      Word: "difficulty",
      Definitons: "something that is hard to do",
    },
    {
      Word: "everywhere",
      Definitons: "every place",
    },
    {
      Word: "test",
      Definitons: "examination; questions to measure knowledge",
    },
    {
      Word: "case",
      Definitons: "example or instance of something",
    },
    {
      Word: "dinner",
      Definitons: "main meal of the day, usually in the evening in the us",
    },
    {
      Word: "direct",
      Definitons: "to tell someone to do something in a straight-talking way",
    },
    {
      Word: "directly",
      Definitons: "in a frank and honest way",
    },
    {
      Word: "director",
      Definitons: "senior person who manages part of an organization",
    },
    {
      Word: "good",
      Definitons: "excellent; high quality",
    },
    {
      Word: "stimulate",
      Definitons: "excite to action",
    },
    {
      Word: "numerous",
      Definitons: "existing in large numbers",
    },
    {
      Word: "distant",
      Definitons: "existing or happening far away in space",
    },
    {
      Word: "silver",
      Definitons: "expensive, near white color metal (symbol Ag)",
    },
    {
      Word: "veteran",
      Definitons: "experienced through long service or practice",
    },
    {
      Word: "consultant",
      Definitons: "expert who gives (paid) advice",
    },
    {
      Word: "discover",
      Definitons: "to find something new that was not known before",
    },
    {
      Word: "reason",
      Definitons: "explanation for why something occurred or was done",
    },
    {
      Word: "discuss",
      Definitons: "to talk about something seriously or in great detail",
    },
    {
      Word: "discussion",
      Definitons: "any long communication about some particular topic ",
    },
    {
      Word: "disease",
      Definitons: "illness that affects a person, animal, or plant",
    },
    {
      Word: "demonstration",
      Definitons: "explanation of how something works",
    },
    {
      Word: "extension",
      Definitons: "extra time allowed to complete something",
    },
    {
      Word: "further",
      Definitons: "extra; in addition",
    },
    {
      Word: "giant",
      Definitons: "extremely big, or much bigger than other things",
    },
    {
      Word: "display",
      Definitons: "to put so they can be seen or be bought",
    },
    {
      Word: "crucial",
      Definitons: "extremely important",
    },
    {
      Word: "distance",
      Definitons: "amount of space between two places or things",
    },
    {
      Word: "remote",
      Definitons: "far away",
    },
    {
      Word: "sheep",
      Definitons: "farm animal kept for meat and wool",
    },
    {
      Word: "pig",
      Definitons: "farm animal that gives bacon and ham",
    },
    {
      Word: "dad",
      Definitons: "father",
    },
    {
      Word: "district",
      Definitons: "area of a country, city, or town",
    },
    {
      Word: "anxiety",
      Definitons: "fear about what might happen; worry",
    },
    {
      Word: "motivation",
      Definitons:
        "feeling in a person that makes him or her want to do something",
    },
    {
      Word: "divide",
      Definitons: "to separate something into equal pieces",
    },
    {
      Word: "tension",
      Definitons: "feeling of anxiety and inability to relax",
    },
    {
      Word: "joy",
      Definitons: "feeling of great happiness and pleasure",
    },
    {
      Word: "document",
      Definitons: "official (printed) record that gives information",
    },
    {
      Word: "dog",
      Definitons: "small 4-legged animal that barks kept as a pet",
    },
    {
      Word: "dollar",
      Definitons: "a basic unit of money equal to 100 cent",
    },
    {
      Word: "friendship",
      Definitons: "feeling of liking someone; good relationship",
    },
    {
      Word: "door",
      Definitons: "you walk through this when you go in a room",
    },
    {
      Word: "double",
      Definitons: "two times the amount or degree; twice",
    },
    {
      Word: "doubt",
      Definitons: "not being sure of something; lack of certainty",
    },
    {
      Word: "hunger",
      Definitons: "feeling of needing to eat food",
    },
    {
      Word: "concern",
      Definitons: "feeling of worry or anxiety",
    },
    {
      Word: "grateful",
      Definitons: "feeling or showing thanks; thankful",
    },
    {
      Word: "ashamed",
      Definitons: "feeling shame or guilt because you did something wrong",
    },
    {
      Word: "confident",
      Definitons: "feeling that you can do well at something",
    },
    {
      Word: "uncertainty",
      Definitons: "feeling that you don't really know what will happen",
    },
    {
      Word: "draw",
      Definitons: "to create an image using pen or pencil and paper",
    },
    {
      Word: "dream",
      Definitons:
        "images, thoughts, and feelings that are experienced during sleep",
    },
    {
      Word: "dress",
      Definitons: "women's garment with a top part and a skirt",
    },
    {
      Word: "drink",
      Definitons: "to put water in your body through your mouth",
    },
    {
      Word: "sad",
      Definitons: "feeling unhappy; wishing something hadn't happened",
    },
    {
      Word: "driver",
      Definitons: "someone who operates a vehicle",
    },
    {
      Word: "drop",
      Definitons: "to let something fall from your hand",
    },
    {
      Word: "drug",
      Definitons: "chemical used as a medicine",
    },
    {
      Word: "dry",
      Definitons: "without water; not wet",
    },
    {
      Word: "due",
      Definitons: "when something is required or expected",
    },
    {
      Word: "she",
      Definitons: "female person or animal mentioned before",
    },
    {
      Word: "ultimately",
      Definitons: "finally, after doing other things",
    },
    {
      Word: "duty",
      Definitons: "work required by your job or position",
    },
    {
      Word: "dust",
      Definitons: "fine dry powder that builds up on surfaces",
    },
    {
      Word: "solid",
      Definitons: "firm or hard; not a gas or liquid",
    },
    {
      Word: "steady",
      Definitons:
        "firmly fixed, supported, or balanced; not shaking, rocking, or likely to fall over",
    },
    {
      Word: "earn",
      Definitons: "to get money for work",
    },
    {
      Word: "earth",
      Definitons: "planet we live on",
    },
    {
      Word: "start",
      Definitons: "first time or place that a thing exists; beginning",
    },
    {
      Word: "easily",
      Definitons: "without difficulty",
    },
    {
      Word: "term",
      Definitons: "fixed period of weeks for learning at school",
    },
    {
      Word: "shelf",
      Definitons: "flat board attached to a wall on which to store things",
    },
    {
      Word: "easy",
      Definitons: "not hard to do; not difficult",
    },
    {
      Word: "eat",
      Definitons: "to put food in your mouth",
    },
    {
      Word: "economic",
      Definitons: "having to do with trade, industry, and money",
    },
    {
      Word: "edge",
      Definitons: "boundary of a surface",
    },
    {
      Word: "conventional",
      Definitons: "following the common attitudes and practices",
    },
    {
      Word: "fruit",
      Definitons: "food that grows on a tree or bush",
    },
    {
      Word: "boot",
      Definitons: "footwear covering your foot and part of your leg",
    },
    {
      Word: "education",
      Definitons: "process of giving or receiving teaching",
    },
    {
      Word: "because",
      Definitons: "for a reason",
    },
    {
      Word: "forever",
      Definitons: "for a very long or seemingly endless time",
    },
    {
      Word: "effective",
      Definitons: "working efficiently to produce a desired result",
    },
    {
      Word: "per",
      Definitons: "for each; during each",
    },
    {
      Word: "so",
      Definitons: "for that reason",
    },
    {
      Word: "why",
      Definitons: "for what reason or purpose",
    },
    {
      Word: "effort",
      Definitons: "amount of work used trying to do something",
    },
    {
      Word: "egg",
      Definitons: "hard-shelled thing from which a young bird is born",
    },
    {
      Word: "sir",
      Definitons: "form of address to a man you respect",
    },
    {
      Word: "format",
      Definitons: "form, design, or arrangement of something",
    },
    {
      Word: "election",
      Definitons: "process of choosing someone by voting",
    },
    {
      Word: "lucky",
      Definitons: "fortunate; having good things happen to you",
    },
    {
      Word: "hence",
      Definitons: "from now, later than the present time",
    },
    {
      Word: "through",
      Definitons: "from one end or side of something to the other end or side",
    },
    {
      Word: "element",
      Definitons: "essential or particular part of something",
    },
    {
      Word: "across",
      Definitons: "from one side to the other of something",
    },
    {
      Word: "else",
      Definitons: "otherwise; if you fail to...",
    },
    {
      Word: "since",
      Definitons: "from the time in the past that",
    },
    {
      Word: "e-mail",
      Definitons:
        "a system for sending messages electronically, especially from one computer to another using the internet",
    },
    {
      Word: "face",
      Definitons: "front part of the head where eyes, nose, and mouth are",
    },
    {
      Word: "tennis",
      Definitons: "game played by hitting a ball over a net",
    },
    {
      Word: "emerge",
      Definitons: "to rise or appear out of some background",
    },
    {
      Word: "golf",
      Definitons: "game played to hit a ball into a hole with a stick",
    },
    {
      Word: "preparation",
      Definitons: "getting ready for something",
    },
    {
      Word: "present",
      Definitons: "gift",
    },
    {
      Word: "sale",
      Definitons: "giving something for money; the amount sold",
    },
    {
      Word: "down",
      Definitons: "going from a higher position to a lower position",
    },
    {
      Word: "employ",
      Definitons: "to pay a person to work for you; to give a job to",
    },
    {
      Word: "employee",
      Definitons: "person who works for someone else for payment",
    },
    {
      Word: "into",
      Definitons: "going inside something",
    },
    {
      Word: "alright",
      Definitons: "good; acceptable",
    },
    {
      Word: "empty",
      Definitons: "containing nothing; with no contents",
    },
    {
      Word: "enable",
      Definitons: "to make it possible to do something",
    },
    {
      Word: "honest",
      Definitons: "good; always telling the truth and not stealing",
    },
    {
      Word: "encourage",
      Definitons: "to make someone more determined or confident",
    },
    {
      Word: "sand",
      Definitons: "grains of rock that make beaches and deserts",
    },
    {
      Word: "more",
      Definitons: "greater in amount, number, or size",
    },
    {
      Word: "energy",
      Definitons: "physical or mental strength",
    },
    {
      Word: "engage",
      Definitons: "to carry out, participate in; be involved in",
    },
    {
      Word: "tall",
      Definitons: "greater in height than average",
    },
    {
      Word: "enjoy",
      Definitons: "to take pleasure in something",
    },
    {
      Word: "empire",
      Definitons: "group of countries controlled by one government",
    },
    {
      Word: "tune",
      Definitons: "group of musical notes that make a nice sound",
    },
    {
      Word: "ensure",
      Definitons: "to make something sure, certain, or safe",
    },
    {
      Word: "enter",
      Definitons: "to go into a room",
    },
    {
      Word: "government",
      Definitons: "group of people and system which rule a nation",
    },
    {
      Word: "jury",
      Definitons:
        "group of people who listen to information about something and make a decision",
    },
    {
      Word: "personnel",
      Definitons: "group of people who work for a company",
    },
    {
      Word: "entire",
      Definitons: "complete or full; with no part left out; whole",
    },
    {
      Word: "bunch",
      Definitons: "group of things of the same kind",
    },
    {
      Word: "pile",
      Definitons: "group of things one on top of another",
    },
    {
      Word: "type",
      Definitons: "group of things or people sharing common features",
    },
    {
      Word: "environment",
      Definitons: "natural world in which plants and animals live",
    },
    {
      Word: "environmental",
      Definitons: "of the natural world in which plants and animals live",
    },
    {
      Word: "sort",
      Definitons: "group or class of similar things or people",
    },
    {
      Word: "equal",
      Definitons: "same in shape, size, or number",
    },
    {
      Word: "constantly",
      Definitons: "happening a lot or all the time",
    },
    {
      Word: "subsequent",
      Definitons: "happening after",
    },
    {
      Word: "equipment",
      Definitons: "tools or materials used to perform a task",
    },
    {
      Word: "constant",
      Definitons: "happening frequently or without pause",
    },
    {
      Word: "error",
      Definitons: "something that is not correct; a mistake",
    },
    {
      Word: "especially",
      Definitons: "more than usual; extremely",
    },
    {
      Word: "briefly",
      Definitons: "happening in a short period of time; using few words",
    },
    {
      Word: "essential",
      Definitons: "extremely important and necessary",
    },
    {
      Word: "establish",
      Definitons: "to set or create something to last for a long time",
    },
    {
      Word: "still",
      Definitons: "happening in the past and continuing into the present",
    },
    {
      Word: "late",
      Definitons: "happening near the end of a given time",
    },
    {
      Word: "frequent",
      Definitons: "happening often",
    },
    {
      Word: "weekly",
      Definitons: "happening once a week",
    },
    {
      Word: "evening",
      Definitons: "last part of the day and early part of the night",
    },
    {
      Word: "event",
      Definitons: "something that happens",
    },
    {
      Word: "eventually",
      Definitons: "finally",
    },
    {
      Word: "prior",
      Definitons: "happening or coming earlier in time",
    },
    {
      Word: "sudden",
      Definitons: "happening or done quickly or unexpectedly",
    },
    {
      Word: "everybody",
      Definitons: "every person; everyone",
    },
    {
      Word: "routine",
      Definitons: "happening or done regularly or frequently",
    },
    {
      Word: "everyone",
      Definitons: "every person; everybody",
    },
    {
      Word: "everything",
      Definitons: "all of the things mentioned",
    },
    {
      Word: "early",
      Definitons: "happening sooner than expected",
    },
    {
      Word: "evidence",
      Definitons: "factual proof that helps to establish the truth",
    },
    {
      Word: "rapid",
      Definitons: "happening very quickly",
    },
    {
      Word: "continuous",
      Definitons: "happening without stops",
    },
    {
      Word: "satisfaction",
      Definitons: "happy feeling because of something that you did",
    },
    {
      Word: "exactly",
      Definitons: "no more and no less than; precisely",
    },
    {
      Word: "shell",
      Definitons: "hard outer covering that protects",
    },
    {
      Word: "bone",
      Definitons: "hard pieces of a body that form the frame of an animal",
    },
    {
      Word: "concrete",
      Definitons:
        "hard substance used in building made by mixing cement, sand, small stones, and water",
    },
    {
      Word: "excellent",
      Definitons: "extremely good",
    },
    {
      Word: "except",
      Definitons: "not including; other than",
    },
    {
      Word: "tooth",
      Definitons: "hard white thing in the mouth used for biting and eating",
    },
    {
      Word: "important",
      Definitons: "having a big effect on (person, the future)",
    },
    {
      Word: "exchange",
      Definitons: "to give things of similar value to each other",
    },
    {
      Word: "possible",
      Definitons: "having a chance of happening, or being true",
    },
    {
      Word: "brilliant",
      Definitons: "having a great amount of intelligence or talent",
    },
    {
      Word: "wealthy",
      Definitons: "having a great amount of money or property",
    },
    {
      Word: "executive",
      Definitons: "a senior manager in a business or organization",
    },
    {
      Word: "exercise",
      Definitons: "to work out to become stronger and healthier",
    },
    {
      Word: "employment",
      Definitons: "having a job; work done for money",
    },
    {
      Word: "exist",
      Definitons: "to be present, alive or real",
    },
    {
      Word: "expand",
      Definitons: "to become bigger or larger in size and amount",
    },
    {
      Word: "thick",
      Definitons: "having a large distance between two surfaces",
    },
    {
      Word: "sick",
      Definitons: "having a physical or mental illness; not feeling well",
    },
    {
      Word: "angry",
      Definitons:
        "having a strong feeling about something that you dislike very much",
    },
    {
      Word: "expensive",
      Definitons: "costing a lot of money",
    },
    {
      Word: "nervous",
      Definitons: "having a tendency to become uneasy or anxious",
    },
    {
      Word: "experiment",
      Definitons: "test performed to assess new ideas or theories",
    },
    {
      Word: "sharp",
      Definitons: "having a thin edge or point that is able to cut",
    },
    {
      Word: "expert",
      Definitons: "skillful person with special knowledge",
    },
    {
      Word: "explain",
      Definitons: "to make clear or easy to understand by describing",
    },
    {
      Word: "sufficient",
      Definitons: "having as much as is needed for a particular purpose",
    },
    {
      Word: "export",
      Definitons: "to send goods to be sold in another country",
    },
    {
      Word: "guilty",
      Definitons: "having done something bad or illegal",
    },
    {
      Word: "old",
      Definitons: "having existed for a long time, not young or new",
    },
    {
      Word: "express",
      Definitons: "to state or show what you think or how you feel",
    },
    {
      Word: "expression",
      Definitons: "act of making your thoughts and feelings known",
    },
    {
      Word: "fortunate",
      Definitons: "having good luck",
    },
    {
      Word: "already",
      Definitons: "having happened or been done before this time",
    },
    {
      Word: "extent",
      Definitons: "range or space included in something",
    },
    {
      Word: "awareness",
      Definitons: "having knowledge of something",
    },
    {
      Word: "extra",
      Definitons: "more than necessary; additional",
    },
    {
      Word: "weak",
      Definitons: "having little power; not strong; easy to break",
    },
    {
      Word: "sure",
      Definitons: "having no doubts about something",
    },
    {
      Word: "extremely",
      Definitons: "in a way that is much more than usual or expected",
    },
    {
      Word: "possession",
      Definitons: "having or owning something",
    },
    {
      Word: "variable",
      Definitons: "having the ability to change or vary",
    },
    {
      Word: "facility",
      Definitons: "piece of equipment or buildings with a special use",
    },
    {
      Word: "creative",
      Definitons: "having the ability to make something new",
    },
    {
      Word: "factor",
      Definitons: "something that influences a result",
    },
    {
      Word: "factory",
      Definitons: "building where things are made",
    },
    {
      Word: "independence",
      Definitons: "having the freedom to make your own decisions ",
    },
    {
      Word: "fail",
      Definitons: "to not achieve a goal, or to go wrong",
    },
    {
      Word: "failure",
      Definitons: "act or result of not achieving your goals",
    },
    {
      Word: "fair",
      Definitons: "treating all people the same way",
    },
    {
      Word: "able",
      Definitons:
        "having the power, skill, knowledge, or money to do something",
    },
    {
      Word: "regional",
      Definitons: "having to do with a particular area",
    },
    {
      Word: "psychological",
      Definitons: "having to do with the mind",
    },
    {
      Word: "mayor",
      Definitons: "head of a city's government",
    },
    {
      Word: "familiar",
      Definitons: "well-known or easily recognized",
    },
    {
      Word: "tight",
      Definitons: "held together firmly; difficult to move",
    },
    {
      Word: "famous",
      Definitons: "widely known; recognized by many people",
    },
    {
      Word: "fan",
      Definitons: "thing you wave in front of your face to stay cool",
    },
    {
      Word: "upper",
      Definitons: "higher than others of the same kind",
    },
    {
      Word: "top",
      Definitons: "highest or upper part or point of something",
    },
    {
      Word: "frequency",
      Definitons: "how often something happens",
    },
    {
      Word: "farm",
      Definitons: "land used for growing crops or raising animals",
    },
    {
      Word: "way",
      Definitons: "how something is done",
    },
    {
      Word: "fashion",
      Definitons: "style of dress or activity popular at some time",
    },
    {
      Word: "fast",
      Definitons: "moving or able to move quickly",
    },
    {
      Word: "enormous",
      Definitons: "huge; very big; very large",
    },
    {
      Word: "father",
      Definitons: "a male parent",
    },
    {
      Word: "people",
      Definitons: "human beings in general; plural of person",
    },
    {
      Word: "favor",
      Definitons: "helpful act of kindness",
    },
    {
      Word: "favorite",
      Definitons: "most liked; best loved",
    },
    {
      Word: "feature",
      Definitons: "distinctive or important point of something",
    },
    {
      Word: "federal",
      Definitons: "system of government",
    },
    {
      Word: "fee",
      Definitons: "amount of money paid for a particular service",
    },
    {
      Word: "notion",
      Definitons: "idea or opinion about doing something",
    },
    {
      Word: "female",
      Definitons: "person of the sex that gives birth to babies",
    },
    {
      Word: "hypothesis",
      Definitons: "idea that leads to further study or discussion",
    },
    {
      Word: "same",
      Definitons: "identical; not different",
    },
    {
      Word: "whether",
      Definitons: "if something will happen or not",
    },
    {
      Word: "reflection",
      Definitons: "image that you see in a mirror, glass, or water",
    },
    {
      Word: "field",
      Definitons: "open area of land, especially without buildings",
    },
    {
      Word: "fight",
      Definitons: "act of trying to hurt someone by hitting them",
    },
    {
      Word: "next",
      Definitons: "immediately after the previous one",
    },
    {
      Word: "fill",
      Definitons: "to make something full",
    },
    {
      Word: "film",
      Definitons: "movie",
    },
    {
      Word: "significance",
      Definitons:
        "importance of something; the potential for something to have a big effect",
    },
    {
      Word: "final",
      Definitons: "being the last thing in a series",
    },
    {
      Word: "finally",
      Definitons: "after a long time or some difficulty",
    },
    {
      Word: "finance",
      Definitons: "control of money a person/business has access to",
    },
    {
      Word: "financial",
      Definitons: "involving money",
    },
    {
      Word: "issue",
      Definitons: "important topic discussed, debated, or argued over",
    },
    {
      Word: "fine",
      Definitons: "good, acceptable or satisfactory",
    },
    {
      Word: "finger",
      Definitons: "one of the five long parts of the hand",
    },
    {
      Word: "finish",
      Definitons: "end of something; completion",
    },
    {
      Word: "fire",
      Definitons: "heat and the flame produced when burning",
    },
    {
      Word: "firm",
      Definitons: "fairly hard or solid, not soft",
    },
    {
      Word: "properly",
      Definitons: "in a correct or suitable way depending on the situation",
    },
    {
      Word: "reasonably",
      Definitons: "in a fair and just manner",
    },
    {
      Word: "perfectly",
      Definitons: "in a faultless manner; without mistakes",
    },
    {
      Word: "fish",
      Definitons: "animal that swims and lives in the sea",
    },
    {
      Word: "fit",
      Definitons: "proper or acceptable; morally or socially correct",
    },
    {
      Word: "fix",
      Definitons: "to make something whole or able to work again",
    },
    {
      Word: "stable",
      Definitons: "in a good situation or condition; not likely to change",
    },
    {
      Word: "well",
      Definitons: "in a good way",
    },
    {
      Word: "flat",
      Definitons: "level; even; without curves or bumps",
    },
    {
      Word: "firmly",
      Definitons: "in a hard, steady, unchanging way",
    },
    {
      Word: "flight",
      Definitons: "act of flying",
    },
    {
      Word: "successfully",
      Definitons: "in a manner that achieves a goal",
    },
    {
      Word: "floor",
      Definitons: "part of a room on which you stand",
    },
    {
      Word: "flow",
      Definitons: "to move steadily and easily in a certain direction",
    },
    {
      Word: "fly",
      Definitons: "to travel through the air using wings",
    },
    {
      Word: "focus",
      Definitons: "main purpose or center of interest or activity",
    },
    {
      Word: "hopefully",
      Definitons: "in a manner wishing something to happen",
    },
    {
      Word: "gently",
      Definitons: "in a mild, careful, and soft manner",
    },
    {
      Word: "typically",
      Definitons: "in a normal or usual way",
    },
    {
      Word: "dramatically",
      Definitons: "in a sudden or extreme manner",
    },
    {
      Word: "faithfully",
      Definitons: "in a trustworthy manner",
    },
    {
      Word: "foot",
      Definitons: "lowest part of the leg we use to stand on",
    },
    {
      Word: "football",
      Definitons: "sport where 2 teams try to kick a ball in a goal; soccer",
    },
    {
      Word: "automatically",
      Definitons: "in a way not requiring control by a person",
    },
    {
      Word: "literally",
      Definitons: "in a way that expresses the exact meaning of something",
    },
    {
      Word: "foreign",
      Definitons: "being of a different place or country",
    },
    {
      Word: "forest",
      Definitons: "large area with many trees",
    },
    {
      Word: "significantly",
      Definitons: "in a way that is important or noticeable",
    },
    {
      Word: "forget",
      Definitons: "to not remember something",
    },
    {
      Word: "somehow",
      Definitons: "in a way that is not known or certain",
    },
    {
      Word: "differently",
      Definitons: "in a way that is not the same",
    },
    {
      Word: "effectively",
      Definitons: "in a way that produces the result you want",
    },
    {
      Word: "furthermore",
      Definitons: "in addition to what has been said",
    },
    {
      Word: "former",
      Definitons: "being something previously, but not now",
    },
    {
      Word: "also",
      Definitons: "in addition; too; in a similar way",
    },
    {
      Word: "equally",
      Definitons: "in an equal, similar, or identical way",
    },
    {
      Word: "forward",
      Definitons: "toward what is ahead or in front",
    },
    {
      Word: "precisely",
      Definitons: "in an exact and accurate manner",
    },
    {
      Word: "roughly",
      Definitons: "in an inexact or imprecise manner",
    },
    {
      Word: "rarely",
      Definitons: "in an infrequent manner",
    },
    {
      Word: "surprisingly",
      Definitons: "in an unexpected way",
    },
    {
      Word: "freedom",
      Definitons: "state of being free, not being controlled",
    },
    {
      Word: "wherever",
      Definitons: "in any situation or at any time that",
    },
    {
      Word: "against",
      Definitons: "in opposition to; disagreeing with",
    },
    {
      Word: "southern",
      Definitons: "in or from the south",
    },
    {
      Word: "abroad",
      Definitons: "in or to a foreign country",
    },
    {
      Word: "fresh",
      Definitons: "newly made or gathered",
    },
    {
      Word: "overseas",
      Definitons: "in or to a foreign country that is across a sea",
    },
    {
      Word: "friendly",
      Definitons: "acting like a friend; kind and helpful",
    },
    {
      Word: "elsewhere",
      Definitons: "in or to another or different place",
    },
    {
      Word: "northern",
      Definitons: "in or toward the north",
    },
    {
      Word: "front",
      Definitons: "opposite of back; the forward part of an object",
    },
    {
      Word: "partly",
      Definitons: "in part; not completely",
    },
    {
      Word: "there",
      Definitons: "in that place or position, at that location",
    },
    {
      Word: "among",
      Definitons: "in the center of some things; in relation to several things",
    },
    {
      Word: "full",
      Definitons: "containing or holding as much as possible",
    },
    {
      Word: "fully",
      Definitons: "completely or entirely",
    },
    {
      Word: "fun",
      Definitons: "amusing and enjoyable",
    },
    {
      Word: "function",
      Definitons: "what something is intended to be used for; purpose",
    },
    {
      Word: "primarily",
      Definitons: "in the most basic or important way",
    },
    {
      Word: "fund",
      Definitons: "to supply money for something",
    },
    {
      Word: "respectively",
      Definitons: "in the order people or things were mentioned",
    },
    {
      Word: "funny",
      Definitons: "causing laughter; amusing",
    },
    {
      Word: "at",
      Definitons: "in the place where something is",
    },
    {
      Word: "under",
      Definitons: "in the same place as another thing, but lower",
    },
    {
      Word: "least",
      Definitons: "in the smallest or lowest way",
    },
    {
      Word: "between",
      Definitons: "in the space that separates two objects",
    },
    {
      Word: "how",
      Definitons: "in what way something happens or is done",
    },
    {
      Word: "anywhere",
      Definitons: "in, at, or to any place; used in questions, with 'not'",
    },
    {
      Word: "garden",
      Definitons: "yard; ground outside your house to grow plants",
    },
    {
      Word: "gas",
      Definitons: "elements in our air, like oxygen or nitrogen",
    },
    {
      Word: "every",
      Definitons: "including each person or thing in a group",
    },
    {
      Word: "gather",
      Definitons: "to bring people/animals together into a group",
    },
    {
      Word: "grand",
      Definitons: "including many things; very large",
    },
    {
      Word: "comprehensive",
      Definitons: "including most or all things",
    },
    {
      Word: "instruction",
      Definitons: "information about how to do or use something",
    },
    {
      Word: "database",
      Definitons: "information stored in a computer in an organized way",
    },
    {
      Word: "general",
      Definitons: "widespread, normal or usual",
    },
    {
      Word: "generate",
      Definitons: "to create or be produced or bring into existence",
    },
    {
      Word: "generation",
      Definitons: "people born and living at about the same time",
    },
    {
      Word: "hint",
      Definitons:
        "information that helps you understand or do something more easily",
    },
    {
      Word: "proof",
      Definitons: "information which shows that something is true or correct",
    },
    {
      Word: "interior",
      Definitons: "inside part of something",
    },
    {
      Word: "sake",
      Definitons: "interest or benefit of someone or something",
    },
    {
      Word: "remarkable",
      Definitons: "interesting and unexpected, worthy of notice",
    },
    {
      Word: "attraction",
      Definitons: "interesting place people want to visit",
    },
    {
      Word: "gift",
      Definitons: "something given to another for a reason; present",
    },
    {
      Word: "girl",
      Definitons: "a female child",
    },
    {
      Word: "if",
      Definitons: "introducing a condition for something to happen",
    },
    {
      Word: "glad",
      Definitons: "happy that something happened; pleased",
    },
    {
      Word: "intervention",
      Definitons: "involvement in a situation to prevent future problems",
    },
    {
      Word: "glass",
      Definitons: "hard transparent material used for making windows",
    },
    {
      Word: "global",
      Definitons: "concerning, affecting, or involving the entire world",
    },
    {
      Word: "social",
      Definitons:
        "involving activities among people especially free time activities",
    },
    {
      Word: "goal",
      Definitons: "something you try to do or achieve; an aim",
    },
    {
      Word: "theoretical",
      Definitons:
        "involving the uncertain or yet to be proved parts of a particular subject",
    },
    {
      Word: "gold",
      Definitons: "soft yellow metal that is very valuable",
    },
    {
      Word: "product",
      Definitons: "item that can be bought",
    },
    {
      Word: "furniture",
      Definitons: "items such as tables, chairs, beds, or closets",
    },
    {
      Word: "profession",
      Definitons: "job requiring special education or skills",
    },
    {
      Word: "evaluation",
      Definitons: "judgment about the value or condition of something",
    },
    {
      Word: "only",
      Definitons: "just one; just that amount or thing; not more than",
    },
    {
      Word: "maintenance",
      Definitons: "keeping (a machine) working by checking and fixing it",
    },
    {
      Word: "spare",
      Definitons: "kept as something extra that can be used if it is needed",
    },
    {
      Word: "grade",
      Definitons: "level of study that is completed by a student",
    },
    {
      Word: "piano",
      Definitons: "keyboard instrument used for playing music",
    },
    {
      Word: "gentle",
      Definitons: "kind and quiet in nature; not harsh or violent",
    },
    {
      Word: "experience",
      Definitons: "knowledge gained by living life, doing new things",
    },
    {
      Word: "wise",
      Definitons: "knowledgeable about life; having good judgment",
    },
    {
      Word: "silly",
      Definitons: "lacking seriousness or foolish",
    },
    {
      Word: "grant",
      Definitons: "to give or let someone do what they want",
    },
    {
      Word: "stupid",
      Definitons: "lacking the ability to learn easily; not intelligent",
    },
    {
      Word: "shore",
      Definitons: "land along the edge of an area of water",
    },
    {
      Word: "coast",
      Definitons: "land near the sea or ocean",
    },
    {
      Word: "estate",
      Definitons: "land that a person owns",
    },
    {
      Word: "big",
      Definitons: "large",
    },
    {
      Word: "green",
      Definitons: "color of young leaves",
    },
    {
      Word: "wealth",
      Definitons: "large amount of money and possessions",
    },
    {
      Word: "ocean",
      Definitons:
        "large body of salt water that covers most of the surface of the earth",
    },
    {
      Word: "ground",
      Definitons: "solid surface of the earth that we stand on",
    },
    {
      Word: "long",
      Definitons: "large distance from one end to the other",
    },
    {
      Word: "cow",
      Definitons: "large farm animal from which we get milk and beef",
    },
    {
      Word: "growth",
      Definitons: "act of growing",
    },
    {
      Word: "guarantee",
      Definitons:
        "to make a formal promise that something will happen or be done.",
    },
    {
      Word: "guess",
      Definitons: "to give an answer without knowing if it is correct",
    },
    {
      Word: "guest",
      Definitons: "person invited to visit or stay in someone's home",
    },
    {
      Word: "guide",
      Definitons: "to lead people visiting a new or unknown place",
    },
    {
      Word: "substantial",
      Definitons: "large in amount, quantity, or size",
    },
    {
      Word: "considerable",
      Definitons: "large in size, amount, or effect",
    },
    {
      Word: "guy",
      Definitons: "informal man; boy; any person",
    },
    {
      Word: "hair",
      Definitons: "long thin strands on your head or body",
    },
    {
      Word: "extensive",
      Definitons: "large; full or complete",
    },
    {
      Word: "maximum",
      Definitons: "largest or greatest",
    },
    {
      Word: "handle",
      Definitons: "to have the ability to cope with or take responsibility for",
    },
    {
      Word: "permanent",
      Definitons: "lasting forever; not temporary or changing",
    },
    {
      Word: "after",
      Definitons: "later than another time, or behind something",
    },
    {
      Word: "happy",
      Definitons: "feeling pleasure or joy; glad",
    },
    {
      Word: "discovery",
      Definitons: "learning something for the first time",
    },
    {
      Word: "divorce",
      Definitons: "legal ending of a marriage",
    },
    {
      Word: "hardly",
      Definitons: "clearly or undoubtedly not; very little",
    },
    {
      Word: "power",
      Definitons: "legal or official right to perform certain actions",
    },
    {
      Word: "ownership",
      Definitons: "legal right to have something belong to you",
    },
    {
      Word: "hate",
      Definitons: "to have a very strong feeling of dislike for",
    },
    {
      Word: "secondary",
      Definitons: "less important than something else",
    },
    {
      Word: "pale",
      Definitons: "light in color",
    },
    {
      Word: "comedy",
      Definitons: "light or funny play or film, usually with a happy ending",
    },
    {
      Word: "health",
      Definitons: "being in a good condition; being well",
    },
    {
      Word: "healthy",
      Definitons:
        "in good condition physically (or financially); not ill or bad",
    },
    {
      Word: "probably",
      Definitons: "likely to happen or be true",
    },
    {
      Word: "heart",
      Definitons: "part of the body that pumps blood",
    },
    {
      Word: "heat",
      Definitons: "to make hot or hotter ",
    },
    {
      Word: "medicine",
      Definitons:
        "liquid or pills used to treat illness or pain; the study of treating illness or pain",
    },
    {
      Word: "heavy",
      Definitons: "having a lot of weight",
    },
    {
      Word: "menu",
      Definitons: "list of dishes available at a restaurant",
    },
    {
      Word: "catalog",
      Definitons: "list of items that are available for purchase",
    },
    {
      Word: "small",
      Definitons: "little in size; not big",
    },
    {
      Word: "somewhat",
      Definitons: "little, not very",
    },
    {
      Word: "alive",
      Definitons: "living; not dead",
    },
    {
      Word: "around",
      Definitons: "located on every side, or along something",
    },
    {
      Word: "knife",
      Definitons: "long piece of metal you use for cutting things",
    },
    {
      Word: "herself",
      Definitons: "female person that did the original action",
    },
    {
      Word: "nerve",
      Definitons:
        "long thin cells in the body that makes feeling and movement possible",
    },
    {
      Word: "tube",
      Definitons: "long, hollow object",
    },
    {
      Word: "hide",
      Definitons:
        "to put a thing where it can't be found; go where you won't be found",
    },
    {
      Word: "valley",
      Definitons:
        "long, low area between hills or mountains, often with a river running through it",
    },
    {
      Word: "highly",
      Definitons: "more than usual; to a great degree",
    },
    {
      Word: "rail",
      Definitons: "long, thin piece of metal",
    },
    {
      Word: "himself",
      Definitons: "the same (male) person who did the action",
    },
    {
      Word: "mortgage",
      Definitons: "long-term loan from a bank for buying property",
    },
    {
      Word: "tender",
      Definitons: "loving and gentle",
    },
    {
      Word: "minimum",
      Definitons: "lowest number or amount that is possible",
    },
    {
      Word: "printer",
      Definitons: "machine that makes copies of papers and documents",
    },
    {
      Word: "hit",
      Definitons: "to fight, attack or damage something or someone",
    },
    {
      Word: "golden",
      Definitons: "made of valuable, heavy, yellow metal",
    },
    {
      Word: "wooden",
      Definitons: "made of wood",
    },
    {
      Word: "hole",
      Definitons: "opening into or through something",
    },
    {
      Word: "holiday",
      Definitons: "day when people don't go to work or school",
    },
    {
      Word: "prime",
      Definitons: "main; most important; best quality",
    },
    {
      Word: "implementation",
      Definitons: "making a law, system, or plan start to happen or be used",
    },
    {
      Word: "loud",
      Definitons: "making a lot of noise",
    },
    {
      Word: "quietly",
      Definitons: "making little sound",
    },
    {
      Word: "reduction",
      Definitons: "making something smaller; reducing something",
    },
    {
      Word: "attractive",
      Definitons: "making you like them, as by being good-looking",
    },
    {
      Word: "person",
      Definitons: "man, woman, or child",
    },
    {
      Word: "horse",
      Definitons: "large animal with 4 legs used for riding",
    },
    {
      Word: "hospital",
      Definitons: "building for sick people, with doctors and nurses",
    },
    {
      Word: "hot",
      Definitons: "having a high temperature",
    },
    {
      Word: "multiple",
      Definitons: "many things or people",
    },
    {
      Word: "often",
      Definitons: "many times, frequently, on many occasions",
    },
    {
      Word: "fuel",
      Definitons: "material used to produce heat or power when burned",
    },
    {
      Word: "huge",
      Definitons: "very very large",
    },
    {
      Word: "human",
      Definitons: "a person; a man, woman or child",
    },
    {
      Word: "capability",
      Definitons: "means, ability, or potential to do something",
    },
    {
      Word: "dimension",
      Definitons: "measurement of length, width, or height",
    },
    {
      Word: "surgery",
      Definitons: "medical treatment in which a doctor cuts into a body",
    },
    {
      Word: "husband",
      Definitons: "married man",
    },
    {
      Word: "letter",
      Definitons: "message you put in an envelope and send by post",
    },
    {
      Word: "salary",
      Definitons: "money an employee is paid each year",
    },
    {
      Word: "compensation",
      Definitons: "money given or received as payment for loss",
    },
    {
      Word: "identify",
      Definitons: "to indicate who or what someone or something is",
    },
    {
      Word: "deposit",
      Definitons:
        "money that is given for a special purpose such as proof that you will buy something, or as savings in a bank",
    },
    {
      Word: "ignore",
      Definitons: "to not listen to, look at, or pay attention to",
    },
    {
      Word: "evil",
      Definitons: "morally bad; causing harm to someone",
    },
    {
      Word: "increasingly",
      Definitons: "more and more; in greater degree or amount",
    },
    {
      Word: "several",
      Definitons: "more than two but not many",
    },
    {
      Word: "mom",
      Definitons: "mother",
    },
    {
      Word: "grandmother",
      Definitons: "mother of your mother or father",
    },
    {
      Word: "up",
      Definitons: "move higher; raise",
    },
    {
      Word: "immediately",
      Definitons: "without any delay; straight away; right (after or before)",
    },
    {
      Word: "to",
      Definitons: "move towards; in the direction of",
    },
    {
      Word: "promotion",
      Definitons: "moving someone to a more important position",
    },
    {
      Word: "very",
      Definitons: "much; great in amount",
    },
    {
      Word: "strict",
      Definitons: "must be obeyed",
    },
    {
      Word: "salt",
      Definitons: "natural white substance used to flavor or preserve food",
    },
    {
      Word: "together",
      Definitons: "near close in the same place not far in a family or group",
    },
    {
      Word: "importance",
      Definitons: "being important; having a big effect on",
    },
    {
      Word: "by",
      Definitons: "near; with",
    },
    {
      Word: "impossible",
      Definitons: "very unlikely to happen or exist",
    },
    {
      Word: "most",
      Definitons: "nearly all of something",
    },
    {
      Word: "vital",
      Definitons: "necessary",
    },
    {
      Word: "thirst",
      Definitons: "need for something to drink",
    },
    {
      Word: "improve",
      Definitons: "to make, or become, something better",
    },
    {
      Word: "improvement",
      Definitons: "addition or change that makes something better",
    },
    {
      Word: "innovation",
      Definitons: "new invention or idea that is created",
    },
    {
      Word: "close",
      Definitons: "next to; only a short distance away",
    },
    {
      Word: "anymore",
      Definitons: "no longer; no more",
    },
    {
      Word: "silence",
      Definitons: "no sound or noise",
    },
    {
      Word: "illegal",
      Definitons: "not allowed by the laws or rules",
    },
    {
      Word: "nothing",
      Definitons: "not anything, not a single thing",
    },
    {
      Word: "unable",
      Definitons: "not being able to do something",
    },
    {
      Word: "indeed",
      Definitons: "actually; in fact; in reality",
    },
    {
      Word: "unlikely",
      Definitons: "not being likely to happen or not likely to be the truth",
    },
    {
      Word: "independent",
      Definitons: "making your own decisions; not controlled by others",
    },
    {
      Word: "crazy",
      Definitons: "not being sensible or practical",
    },
    {
      Word: "within",
      Definitons: "not beyond the limits of a particular space, time, or range",
    },
    {
      Word: "individual",
      Definitons: "single person, looked at separately from others",
    },
    {
      Word: "industry",
      Definitons: "factories or businesses that make certain products",
    },
    {
      Word: "dirty",
      Definitons: "not clean",
    },
    {
      Word: "open",
      Definitons: "not closed or shut",
    },
    {
      Word: "rare",
      Definitons: "not common or usual",
    },
    {
      Word: "influence",
      Definitons: "to affect what happens; change something (indirectly)",
    },
    {
      Word: "inform",
      Definitons: "to give information or facts about something",
    },
    {
      Word: "never",
      Definitons: "not ever; not at any time",
    },
    {
      Word: "initial",
      Definitons: "existing or occurring at the beginning",
    },
    {
      Word: "unknown",
      Definitons: "not familiar or famous",
    },
    {
      Word: "nearby",
      Definitons: "not far away",
    },
    {
      Word: "bad",
      Definitons: "not good; wrong",
    },
    {
      Word: "little",
      Definitons: "not great in size, amount, or degree; small",
    },
    {
      Word: "innocent",
      Definitons: "not having done anything wrong or bad",
    },
    {
      Word: "light",
      Definitons: "not heavy; weighing only a little",
    },
    {
      Word: "away",
      Definitons: "not here; far from here; in a different direction",
    },
    {
      Word: "low",
      Definitons: "not high; being near the ground, or bottom",
    },
    {
      Word: "inside",
      Definitons: "being in something",
    },
    {
      Word: "badly",
      Definitons: "not in a good way; not as wanted or liked",
    },
    {
      Word: "nowhere",
      Definitons: "not in or at any place; no place",
    },
    {
      Word: "confusion",
      Definitons: "not knowing what to do",
    },
    {
      Word: "instance",
      Definitons: "an example of something; case",
    },
    {
      Word: "instead",
      Definitons: "when one thing is replaced by another",
    },
    {
      Word: "institution",
      Definitons: "organization created for a particular cause or purpose",
    },
    {
      Word: "lazy",
      Definitons: "not liking to work or make an effort",
    },
    {
      Word: "few",
      Definitons: "not many; small in number",
    },
    {
      Word: "insurance",
      Definitons: "payments to cover potential loss/damage/injury/death",
    },
    {
      Word: "pure",
      Definitons: "not mixed with anything else",
    },
    {
      Word: "different",
      Definitons: "not of the same kind; unlike other things",
    },
    {
      Word: "new",
      Definitons: "not old, recently born, built, or made",
    },
    {
      Word: "intend",
      Definitons: "to plan or want to do something",
    },
    {
      Word: "fancy",
      Definitons: "not plain or ordinary, expensive",
    },
    {
      Word: "false",
      Definitons: "not real or true",
    },
    {
      Word: "rough",
      Definitons: "not smooth, gentle, or careful",
    },
    {
      Word: "minor",
      Definitons: "not so large in size, not important or valuable",
    },
    {
      Word: "internal",
      Definitons: "within or inside",
    },
    {
      Word: "international",
      Definitons: "done or relating to several countries, not just your own",
    },
    {
      Word: "silent",
      Definitons: "not speaking or making noise",
    },
    {
      Word: "ordinary",
      Definitons: "not special, different, or unusual",
    },
    {
      Word: "thin",
      Definitons: "not thick; not wide in size",
    },
    {
      Word: "interview",
      Definitons: "to formally ask questions about a given topic",
    },
    {
      Word: "loose",
      Definitons: "not tightly attached or held",
    },
    {
      Word: "introduce",
      Definitons: "to make someone known to another by name",
    },
    {
      Word: "introduction",
      Definitons: "making someone known to another by name",
    },
    {
      Word: "occasionally",
      Definitons: "not very often; sometimes; seldom",
    },
    {
      Word: "invest",
      Definitons: "to use resources to build for the future",
    },
    {
      Word: "investigate",
      Definitons: "to try to find out facts; to carry out research",
    },
    {
      Word: "investigation",
      Definitons: "search for information about something",
    },
    {
      Word: "investment",
      Definitons: "something purchased hoping its value will increase",
    },
    {
      Word: "ill",
      Definitons: "not well; sick",
    },
    {
      Word: "invite",
      Definitons: "to ask someone to go somewhere or do something",
    },
    {
      Word: "one",
      Definitons: "number 1",
    },
    {
      Word: "group",
      Definitons: "number of people or things gathered together",
    },
    {
      Word: "island",
      Definitons: "area of land that is surrounded by water",
    },
    {
      Word: "density",
      Definitons: "number of people or things in a particular area",
    },
    {
      Word: "age",
      Definitons: "number of years a person has lived (also of things)",
    },
    {
      Word: "item",
      Definitons: "distinct, individual thing, often part of a group",
    },
    {
      Word: "itself",
      Definitons: "referring to it",
    },
    {
      Word: "he",
      Definitons: "object form of a male person you are talking about",
    },
    {
      Word: "gradually",
      Definitons: "occurring in a slow manner over a period of time",
    },
    {
      Word: "join",
      Definitons: "to bring something close to another, to become one",
    },
    {
      Word: "monthly",
      Definitons: "occurring twelve times a year",
    },
    {
      Word: "weird",
      Definitons: "odd or unusual",
    },
    {
      Word: "about",
      Definitons: "of (a subject); concerning",
    },
    {
      Word: "democratic",
      Definitons: "of democracy; entitling the people to power",
    },
    {
      Word: "intellectual",
      Definitons:
        "of or relating to the ability to think in a logical way and understand complicated ideas and subjects",
    },
    {
      Word: "judge",
      Definitons: "to form an opinion after careful consideration",
    },
    {
      Word: "judgment",
      Definitons: "opinion that is made after careful consideration",
    },
    {
      Word: "jump",
      Definitons: "to push your body into the air with your legs",
    },
    {
      Word: "brown",
      Definitons: "of the color of coffee, wood, or chocolate",
    },
    {
      Word: "qualification",
      Definitons: "official record proving a certain standard or level",
    },
    {
      Word: "frequently",
      Definitons: "often; regularly",
    },
    {
      Word: "fat",
      Definitons: "oily part of meat",
    },
    {
      Word: "right",
      Definitons: "on side where the hand that most people write with",
    },
    {
      Word: "today",
      Definitons: "on this day; at the time that is happening now",
    },
    {
      Word: "key",
      Definitons: "something you use to open a lock or start a car",
    },
    {
      Word: "kid",
      Definitons: "informal child or young person",
    },
    {
      Word: "kill",
      Definitons: "to end the life of a person or other living thing",
    },
    {
      Word: "a",
      Definitons: "one (of something)",
    },
    {
      Word: "any",
      Definitons: "one (thing) of many; some (thing)",
    },
    {
      Word: "kitchen",
      Definitons: "place where food is cooked",
    },
    {
      Word: "another",
      Definitons: "one more (thing); additional (thing)",
    },
    {
      Word: "again",
      Definitons: "one more time, once more",
    },
    {
      Word: "ski",
      Definitons:
        "one of a pair of long flat boards attached to boots for moving smoothly over snow",
    },
    {
      Word: "knowledge",
      Definitons: "information, understanding, or skill",
    },
    {
      Word: "labor",
      Definitons: "to work hard (often physically) for many hours",
    },
    {
      Word: "planet",
      Definitons: "one of the bodies that orbit the sun",
    },
    {
      Word: "lack",
      Definitons: "to not have, or not have enough, of something",
    },
    {
      Word: "land",
      Definitons: "the earth; the ground",
    },
    {
      Word: "either",
      Definitons: "one of two (used when there is a choice of two)",
    },
    {
      Word: "once",
      Definitons: "one time; one instance",
    },
    {
      Word: "largely",
      Definitons: "in large part; mainly or chiefly",
    },
    {
      Word: "kind",
      Definitons: "one type of thing",
    },
    {
      Word: "laugh",
      Definitons: "to make a happy sound when something is funny",
    },
    {
      Word: "almost",
      Definitons: "only a little less than, nearly, not quite",
    },
    {
      Word: "launch",
      Definitons: "to put a rocket into the air; put a ship into the water",
    },
    {
      Word: "law",
      Definitons: "system or rules made by the government",
    },
    {
      Word: "lay",
      Definitons: "to put or set something down in a flat position",
    },
    {
      Word: "merely",
      Definitons: "only, simply, or nothing more than",
    },
    {
      Word: "just",
      Definitons: "only; a short time ago",
    },
    {
      Word: "liberal",
      Definitons:
        "open to new ideas; believing government should actively support social needs",
    },
    {
      Word: "leader",
      Definitons: "person who is in charge of a group or task",
    },
    {
      Word: "leadership",
      Definitons: "quality of being able to guide or influence others",
    },
    {
      Word: "electronic",
      Definitons: "operating by use of electricity; digital",
    },
    {
      Word: "folk",
      Definitons: "ordinary people",
    },
    {
      Word: "civilian",
      Definitons: "ordinary person who is not in the army",
    },
    {
      Word: "charity",
      Definitons: "organization providing help to the needy, the sick",
    },
    {
      Word: "supplier",
      Definitons: "organization that provides a product or service",
    },
    {
      Word: "establishment",
      Definitons: "organization, institution, or place to do business",
    },
    {
      Word: "base",
      Definitons: "origin or start from which something came",
    },
    {
      Word: "left",
      Definitons: "side of your body your heart is on",
    },
    {
      Word: "leg",
      Definitons: "part of the body from the thigh down",
    },
    {
      Word: "legal",
      Definitons: "concerning the law; allowed by law",
    },
    {
      Word: "besides",
      Definitons: "other than or in addition to",
    },
    {
      Word: "forth",
      Definitons: "out of a place; forward in time, place, or way",
    },
    {
      Word: "length",
      Definitons: "measurement of distance or of time",
    },
    {
      Word: "yard",
      Definitons: "outdoor area or garden next to a house",
    },
    {
      Word: "external",
      Definitons: "outside of something",
    },
    {
      Word: "panic",
      Definitons: "overwhelming feeling of fear and anxiety",
    },
    {
      Word: "portrait",
      Definitons:
        "painting, drawing, or photograph of a person's head and shoulders",
    },
    {
      Word: "pink",
      Definitons: "pale red color",
    },
    {
      Word: "library",
      Definitons: "place where books and other media are kept",
    },
    {
      Word: "lie",
      Definitons: "to say something that you know is not true",
    },
    {
      Word: "lift",
      Definitons: "to move something to higher position",
    },
    {
      Word: "segment",
      Definitons: "part divided from the other parts of something",
    },
    {
      Word: "share",
      Definitons: "part of a company you own, shown by a certificate",
    },
    {
      Word: "likely",
      Definitons: "referring to the chance that something will actually happen",
    },
    {
      Word: "limit",
      Definitons: "point beyond which it is not possible to go",
    },
    {
      Word: "portion",
      Definitons: "part of a whole",
    },
    {
      Word: "link",
      Definitons: "to join or connect together",
    },
    {
      Word: "wing",
      Definitons: "part of an animal's body that is used for flying",
    },
    {
      Word: "list",
      Definitons: "series of written names, words or numbers",
    },
    {
      Word: "listen",
      Definitons: "to use your ears to hear and understand things",
    },
    {
      Word: "mind",
      Definitons: "part of humans that allows us to think or feel",
    },
    {
      Word: "neck",
      Definitons: "part of the body joining the head and the body",
    },
    {
      Word: "eye",
      Definitons: "part of the body that you see with",
    },
    {
      Word: "literature",
      Definitons:
        "writings that are valued as works of art, esp. fiction, drama and poetry",
    },
    {
      Word: "nose",
      Definitons: "part of the face used for breathing and smelling",
    },
    {
      Word: "tongue",
      Definitons: "part of the mouth that tastes food and is used for speaking",
    },
    {
      Word: "load",
      Definitons: "large, often heavy, amount of something to be moved",
    },
    {
      Word: "module",
      Definitons: "part or unit with a specific job",
    },
    {
      Word: "location",
      Definitons: "particular position or area",
    },
    {
      Word: "fragment",
      Definitons: "part that is broken off of something",
    },
    {
      Word: "emphasis",
      Definitons: "particular importance to the way something is said",
    },
    {
      Word: "ideal",
      Definitons: "perfect; most suitable; best possible",
    },
    {
      Word: "week",
      Definitons: "period of seven days, starts on Sunday and end on Saturday",
    },
    {
      Word: "gay",
      Definitons: "person attracted to someone of the same sex",
    },
    {
      Word: "immigrant",
      Definitons: "person moving to another country to live there",
    },
    {
      Word: "loss",
      Definitons: "experience or state of failing to have or keep",
    },
    {
      Word: "hero",
      Definitons: "person of great courage and strength who saves others",
    },
    {
      Word: "peer",
      Definitons: "person of the same age, class, or background as another",
    },
    {
      Word: "lovely",
      Definitons: "attractive or beautiful",
    },
    {
      Word: "employer",
      Definitons: "person or firm that pays people to work for them",
    },
    {
      Word: "member",
      Definitons: "person or thing belonging to a group or team",
    },
    {
      Word: "substitute",
      Definitons: "person or thing that takes the place of something",
    },
    {
      Word: "you",
      Definitons: "person someone is speaking or writing to",
    },
    {
      Word: "lunch",
      Definitons: "light meal eaten in the middle of the day",
    },
    {
      Word: "student",
      Definitons: "person studying at school",
    },
    {
      Word: "machine",
      Definitons: "piece of equipment used to do work",
    },
    {
      Word: "athlete",
      Definitons: "person trained to compete in sports",
    },
    {
      Word: "magazine",
      Definitons: "weekly or monthly publication with pictures and stories",
    },
    {
      Word: "champion",
      Definitons: "person who fights for or supports strongly",
    },
    {
      Word: "main",
      Definitons: "most important; most often used",
    },
    {
      Word: "mainly",
      Definitons: "mostly; usually; being the largest part",
    },
    {
      Word: "maintain",
      Definitons: "to keep, exist or continue without changing",
    },
    {
      Word: "governor",
      Definitons: "person who leads a state or province",
    },
    {
      Word: "major",
      Definitons: "important, serious, or large in scope",
    },
    {
      Word: "majority",
      Definitons: "amount that is more than half of a group",
    },
    {
      Word: "holder",
      Definitons: "person who owns or has received something",
    },
    {
      Word: "specialist",
      Definitons:
        "person who works in one specific area of a field or profession",
    },
    {
      Word: "male",
      Definitons: "characteristic of boys or men",
    },
    {
      Word: "poet",
      Definitons: "person who writes poems",
    },
    {
      Word: "manage",
      Definitons: "to run or operate a business by directing others",
    },
    {
      Word: "management",
      Definitons: "people who are in control of a business or group",
    },
    {
      Word: "manager",
      Definitons: "person who controls and runs a business or group",
    },
    {
      Word: "manner",
      Definitons: "that way that something happens or is done",
    },
    {
      Word: "manufacture",
      Definitons: "to produce large numbers of products in a factory",
    },
    {
      Word: "friend",
      Definitons: "person who you like and enjoy being with",
    },
    {
      Word: "map",
      Definitons: "picture showing the geography of an area",
    },
    {
      Word: "maker",
      Definitons: "person, company, or object that creates things",
    },
    {
      Word: "mark",
      Definitons:
        "to make or leave a visible sign on something; a writing symbol",
    },
    {
      Word: "this",
      Definitons: "person, thing, or idea near you",
    },
    {
      Word: "marriage",
      Definitons: "formal relationship between a husband and a wife",
    },
    {
      Word: "marry",
      Definitons: "to become the husband or wife of someone",
    },
    {
      Word: "personality",
      Definitons: "person's character; the way that a person usually acts",
    },
    {
      Word: "match",
      Definitons: "a sports competition between two people or teams",
    },
    {
      Word: "parent",
      Definitons: "person's mother or father",
    },
    {
      Word: "material",
      Definitons: "substance from which a thing is made of",
    },
    {
      Word: "injury",
      Definitons:
        "physical or emotional harm or damage that a person experiences",
    },
    {
      Word: "illustration",
      Definitons: "picture that helps explain something",
    },
    {
      Word: "curtain",
      Definitons: "piece of cloth used to cover a window",
    },
    {
      Word: "flag",
      Definitons:
        "piece of cloth, frequently marked with a colorful symbol or sign",
    },
    {
      Word: "skirt",
      Definitons: "piece of clothing for the lower body worn by women",
    },
    {
      Word: "maybe",
      Definitons: "possibly but not certainly; perhaps",
    },
    {
      Word: "tissue",
      Definitons: "piece of thin, soft paper",
    },
    {
      Word: "gate",
      Definitons: "place in a fence which can be opened or closed",
    },
    {
      Word: "stomach",
      Definitons:
        "place in the body where food is broken down so your body can use it",
    },
    {
      Word: "measure",
      Definitons: "to calculate size, weight or temperature of",
    },
    {
      Word: "center",
      Definitons: "place in the middle of something",
    },
    {
      Word: "jail",
      Definitons: "place to hold criminals being punished for a crime",
    },
    {
      Word: "gallery",
      Definitons: "place to look at various types of art",
    },
    {
      Word: "medical",
      Definitons: "of or relating to physical health or medicine",
    },
    {
      Word: "home",
      Definitons: "place where a person or a family lives",
    },
    {
      Word: "medium",
      Definitons: "middle size, something between other things",
    },
    {
      Word: "intention",
      Definitons: "plan, aim, or purpose",
    },
    {
      Word: "program",
      Definitons: "planned set of actions; a schematic system",
    },
    {
      Word: "grass",
      Definitons: "plants with narrow green leaves, grown on lawns",
    },
    {
      Word: "memory",
      Definitons: "something that has been remembered",
    },
    {
      Word: "musical",
      Definitons: "play or movie set to music",
    },
    {
      Word: "mention",
      Definitons: "to refer to or talk or write about something",
    },
    {
      Word: "opera",
      Definitons: "play with music in which all the words are sung",
    },
    {
      Word: "proud",
      Definitons: "pleased because of something you have done",
    },
    {
      Word: "poetry",
      Definitons: "poetic writing; imaginative verses",
    },
    {
      Word: "tent",
      Definitons: "portable cloth shelter used outdoors",
    },
    {
      Word: "message",
      Definitons: "piece of information that is told/given to someone",
    },
    {
      Word: "approval",
      Definitons: "positive opinion of something or someone",
    },
    {
      Word: "implication",
      Definitons: "possible effects or results from an action or event",
    },
    {
      Word: "method",
      Definitons: "organized and planned way of doing something",
    },
    {
      Word: "middle",
      Definitons: "place that is halfway between two things",
    },
    {
      Word: "vessel",
      Definitons: "pot, container",
    },
    {
      Word: "mile",
      Definitons: "unit of distance; 1.6 kilometers",
    },
    {
      Word: "military",
      Definitons: "concerning soldiers or the armed forces",
    },
    {
      Word: "passion",
      Definitons: "powerful, positive feeling about something",
    },
    {
      Word: "mine",
      Definitons: "that thing that belongs to me",
    },
    {
      Word: "conservative",
      Definitons: "preferring traditional styles and values",
    },
    {
      Word: "minister",
      Definitons: "an official who heads a government department",
    },
    {
      Word: "cost",
      Definitons: "price you pay for something",
    },
    {
      Word: "matter",
      Definitons: "problem or reason for concern",
    },
    {
      Word: "formation",
      Definitons: "process of creating, or making into a particular shape",
    },
    {
      Word: "publication",
      Definitons: "process of producing a book or magazine",
    },
    {
      Word: "mix",
      Definitons: "to combine two or more things to make one",
    },
    {
      Word: "recovery",
      Definitons: "process of returning to a former state after problems",
    },
    {
      Word: "interaction",
      Definitons:
        "process of two or more people or things affecting each other",
    },
    {
      Word: "market",
      Definitons: "public event where people sell goods on tables",
    },
    {
      Word: "withdraw",
      Definitons: "pull back; move away or backward from something",
    },
    {
      Word: "modern",
      Definitons: "of the present time; up to date; contemporary",
    },
    {
      Word: "penalty",
      Definitons: "punishment for committing a crime or offense",
    },
    {
      Word: "justice",
      Definitons: "quality of being fair, equal, or just",
    },
    {
      Word: "humor",
      Definitons: "quality of being funny",
    },
    {
      Word: "beauty",
      Definitons: "quality of being physically or visually attractive",
    },
    {
      Word: "monitor",
      Definitons: "electronic screen on which you can see images",
    },
    {
      Word: "charm",
      Definitons: "quality of making people like you; attractiveness",
    },
    {
      Word: "darkness",
      Definitons: "quality of no or little light",
    },
    {
      Word: "stability",
      Definitons: "quality of not being easily moved or changed",
    },
    {
      Word: "weakness",
      Definitons: "quality of not being powerful or strong",
    },
    {
      Word: "moreover",
      Definitons: "in addition to what has been said",
    },
    {
      Word: "tendency",
      Definitons:
        "quality that something happens or someone behaves in a particular way",
    },
    {
      Word: "scope",
      Definitons: "range of things that something includes",
    },
    {
      Word: "mostly",
      Definitons: "in large part; mainly or chiefly",
    },
    {
      Word: "class",
      Definitons:
        "rank or level in society, ranked from high (rich professional people) to low (ordinary people)",
    },
    {
      Word: "resistance",
      Definitons: "refusal to accept something new or different",
    },
    {
      Word: "state",
      Definitons: "region within a country, with its own government",
    },
    {
      Word: "pension",
      Definitons: "regular payments you receive after you retire",
    },
    {
      Word: "job",
      Definitons: "regular work of earning money",
    },
    {
      Word: "emotional",
      Definitons: "related to deep feelings",
    },
    {
      Word: "mountain",
      Definitons: "very high piece of land, higher than a hill",
    },
    {
      Word: "mouth",
      Definitons: "part of the face used for eating and talking",
    },
    {
      Word: "academic",
      Definitons:
        "related to education or school; (n) educator who works at a college or university",
    },
    {
      Word: "movement",
      Definitons: "part of a piece of music",
    },
    {
      Word: "movie",
      Definitons: "motion picture; film",
    },
    {
      Word: "criminal",
      Definitons:
        "related to illegal activity; (n) a person who has done a crime",
    },
    {
      Word: "scientific",
      Definitons: "related to science",
    },
    {
      Word: "murder",
      Definitons: "crime of deliberately killing a person",
    },
    {
      Word: "romantic",
      Definitons: "related to strong feelings of love between two people",
    },
    {
      Word: "museum",
      Definitons: "building to display art, science, or history objects",
    },
    {
      Word: "clinical",
      Definitons: "related to the examination and treatment of patients",
    },
    {
      Word: "structural",
      Definitons: "related to the way something is built or organized",
    },
    {
      Word: "local",
      Definitons: "relating or restricted to a particular area, city, or town",
    },
    {
      Word: "racial",
      Definitons:
        "relating to a person's group based on inherited physical appearance",
    },
    {
      Word: "myself",
      Definitons: "same person as did the action mentioned",
    },
    {
      Word: "rural",
      Definitons:
        "relating to parts of a country that are outside towns and cities, with fields, woods, etc.",
    },
    {
      Word: "educational",
      Definitons: "relating to teaching in a school",
    },
    {
      Word: "fundamental",
      Definitons: "relating to the most important parts of something",
    },
    {
      Word: "nation",
      Definitons: "area or region controlled by a government and army",
    },
    {
      Word: "national",
      Definitons: "concerning a nation as a whole",
    },
    {
      Word: "presidential",
      Definitons: "relating to the president ",
    },
    {
      Word: "natural",
      Definitons: "not made by humans; without human intervention",
    },
    {
      Word: "calm",
      Definitons: "relaxed and not worried or angry",
    },
    {
      Word: "nature",
      Definitons: "physical world, including plants, animals, rocks",
    },
    {
      Word: "near",
      Definitons: "with a small distance between things",
    },
    {
      Word: "inquiry",
      Definitons: "request for information",
    },
    {
      Word: "nearly",
      Definitons: "not completely; almost",
    },
    {
      Word: "necessarily",
      Definitons: "in a way that is needed or required, or is unavoidable",
    },
    {
      Word: "necessary",
      Definitons: "needed or required; unavoidable",
    },
    {
      Word: "honor",
      Definitons: "respect given to someone who is admired",
    },
    {
      Word: "permission",
      Definitons: "right to do something as allowed by another",
    },
    {
      Word: "high",
      Definitons: "rising upward a great distance",
    },
    {
      Word: "moon",
      Definitons: "round object circling the earth at night",
    },
    {
      Word: "guideline",
      Definitons: "rule, instruction, or principle",
    },
    {
      Word: "neighbor",
      Definitons: "person who lives, or is near, you",
    },
    {
      Word: "grammar",
      Definitons: "rules that explain how words are used in a language",
    },
    {
      Word: "acceptable",
      Definitons: "satisfactory; good enough",
    },
    {
      Word: "too",
      Definitons: "say that something is more than you want",
    },
    {
      Word: "network",
      Definitons: "system of connections",
    },
    {
      Word: "complaint",
      Definitons: "saying something is wrong and should be changed",
    },
    {
      Word: "autumn",
      Definitons:
        "season when the weather is getting colder, between summer and winter",
    },
    {
      Word: "news",
      Definitons: "information about recent events",
    },
    {
      Word: "newspaper",
      Definitons: "sheets of paper (or online) containing news stories",
    },
    {
      Word: "paragraph",
      Definitons: "section of writing that usually deals with one subject",
    },
    {
      Word: "nice",
      Definitons: "good or enjoyable",
    },
    {
      Word: "grain",
      Definitons: "seeds of plants used for food",
    },
    {
      Word: "period",
      Definitons: "set amount of time during which events take place",
    },
    {
      Word: "nobody",
      Definitons: "no person; no one; not any person",
    },
    {
      Word: "nor",
      Definitons:
        "used to show two things that are both untrue or do not happen",
    },
    {
      Word: "normal",
      Definitons: "standard or regular way of doing something",
    },
    {
      Word: "normally",
      Definitons: "in the manner that is usual or ordinary",
    },
    {
      Word: "north",
      Definitons: "direction to your left when facing the rising sun",
    },
    {
      Word: "religion",
      Definitons: "set of beliefs about a god or gods",
    },
    {
      Word: "system",
      Definitons: "set of organized, planned ideas that work together",
    },
    {
      Word: "apartment",
      Definitons: "set of rooms to live in on one floor of a building",
    },
    {
      Word: "mutual",
      Definitons: "shared between two or more people",
    },
    {
      Word: "notice",
      Definitons: "to become aware by sight, touch, or hearing",
    },
    {
      Word: "essay",
      Definitons:
        "short written work that displays someone's opinions or beliefs regarding a particular subject",
    },
    {
      Word: "episode",
      Definitons: "show which is part of a larger story",
    },
    {
      Word: "novel",
      Definitons: "written fiction story",
    },
    {
      Word: "alongside",
      Definitons: "side by side with something",
    },
    {
      Word: "plain",
      Definitons: "simple; easy to understand; clear",
    },
    {
      Word: "aunt",
      Definitons: "sister of your father or mother or the wife of your uncle",
    },
    {
      Word: "nuclear",
      Definitons: "concerning or involving the center of an atom",
    },
    {
      Word: "mere",
      Definitons: "small and unimportant",
    },
    {
      Word: "town",
      Definitons: "small city",
    },
    {
      Word: "nurse",
      Definitons: "person trained to care for sick or injured people",
    },
    {
      Word: "object",
      Definitons: "to disagree; to protest against an idea or plan",
    },
    {
      Word: "objective",
      Definitons: "something you decide you want to do; goal",
    },
    {
      Word: "pocket",
      Definitons: "small cloth bag sewn into clothing to hold things",
    },
    {
      Word: "stamp",
      Definitons:
        "small piece of paper you buy to put on a letter that you mail",
    },
    {
      Word: "observe",
      Definitons: "to watch carefully; to make a comment ",
    },
    {
      Word: "obvious",
      Definitons: "easily understood and clear; plain to see",
    },
    {
      Word: "obviously",
      Definitons: "in a way that is obvious/easy to see or understand",
    },
    {
      Word: "bit",
      Definitons: "small piece of something",
    },
    {
      Word: "stream",
      Definitons: "small river",
    },
    {
      Word: "occur",
      Definitons: "to come to pass or to happen",
    },
    {
      Word: "cap",
      Definitons: "small, soft hat often with a front visor or shade",
    },
    {
      Word: "less",
      Definitons: "smaller in amount or degree",
    },
    {
      Word: "cheek",
      Definitons: "soft skin on each side of the face, below the eyes",
    },
    {
      Word: "snow",
      Definitons: "soft white pieces of frozen water falling from the clouds",
    },
    {
      Word: "answer",
      Definitons: "solution to a problem or test question",
    },
    {
      Word: "officer",
      Definitons: "person with an important position in an organization",
    },
    {
      Word: "official",
      Definitons: "of or done by someone in authority; formal",
    },
    {
      Word: "part",
      Definitons: "some, but not all of a specific thing",
    },
    {
      Word: "oil",
      Definitons: "thick, black liquid in the ground used as fuel",
    },
    {
      Word: "okay",
      Definitons: "yes; alright",
    },
    {
      Word: "prisoner",
      Definitons: "someone kept in a prison as punishment for a crime",
    },
    {
      Word: "dealer",
      Definitons: "someone who buys things to sell to others",
    },
    {
      Word: "designer",
      Definitons: "someone who creates plans to make something",
    },
    {
      Word: "pro",
      Definitons:
        "someone who earns money doing something they are particularly good at",
    },
    {
      Word: "buyer",
      Definitons: "someone who gets something by paying money for it",
    },
    {
      Word: "politician",
      Definitons: "someone who is active in politics",
    },
    {
      Word: "slave",
      Definitons: "someone who is legally owned by another person",
    },
    {
      Word: "operate",
      Definitons: "to be working or being used",
    },
    {
      Word: "operation",
      Definitons: "functioning; use",
    },
    {
      Word: "shareholder",
      Definitons: "someone who owns a part of a corporation",
    },
    {
      Word: "opinion",
      Definitons: "a person's thoughts on a topic",
    },
    {
      Word: "opportunity",
      Definitons: "time/situation when a thing might be done; chance",
    },
    {
      Word: "opposite",
      Definitons: "across from or on the side facing something",
    },
    {
      Word: "listener",
      Definitons: "someone who pays attention to what is said",
    },
    {
      Word: "option",
      Definitons: "possibility out of several that can be chosen; choice",
    },
    {
      Word: "historian",
      Definitons: "someone who studies or writes about the course of history",
    },
    {
      Word: "ally",
      Definitons: "someone who supports, helps, or defends you",
    },
    {
      Word: "operator",
      Definitons: "someone who uses and controls something, usually equipment",
    },
    {
      Word: "enemy",
      Definitons: "someone who wants to harm another",
    },
    {
      Word: "organization",
      Definitons: "formal group of people with a particular purpose",
    },
    {
      Word: "volunteer",
      Definitons: "someone who works willingly without pay",
    },
    {
      Word: "mate",
      Definitons: "someone who you work, live, or go to school with",
    },
    {
      Word: "otherwise",
      Definitons:
        "indicates that there will be a bad result if something is done, not done, or done improperly",
    },
    {
      Word: "ought",
      Definitons: "what is expected; should",
    },
    {
      Word: "reporter",
      Definitons:
        "someone whose job is to write and report news for a newspaper, magazine, television, or radio station",
    },
    {
      Word: "stranger",
      Definitons: "someone you do not know",
    },
    {
      Word: "supplement",
      Definitons: "something added to another thing to make it better",
    },
    {
      Word: "variation",
      Definitons: "something almost the same as another but different",
    },
    {
      Word: "problem",
      Definitons: "something difficult to deal with or causes trouble",
    },
    {
      Word: "outside",
      Definitons: "area around or near something, such as a building",
    },
    {
      Word: "other",
      Definitons: "something else; not the first one",
    },
    {
      Word: "overall",
      Definitons: "viewed as a whole; in general, not as details",
    },
    {
      Word: "luxury",
      Definitons:
        "something expensive or costly that is not needed which is bought for pleasure",
    },
    {
      Word: "achievement",
      Definitons: "something good that you have successfully done",
    },
    {
      Word: "mixture",
      Definitons: "something made by combining two or more things",
    },
    {
      Word: "impressive",
      Definitons: "something makes someone admire or respect",
    },
    {
      Word: "owner",
      Definitons: "person who owns or has something",
    },
    {
      Word: "time",
      Definitons: "something measured in minutes, hours, days, etc.",
    },
    {
      Word: "pack",
      Definitons: "to put things in a suitcase to go on a trip",
    },
    {
      Word: "page",
      Definitons: "one side of a sheet of paper",
    },
    {
      Word: "pain",
      Definitons: "strong feeling of hurt or discomfort",
    },
    {
      Word: "paint",
      Definitons: "to apply something; coat",
    },
    {
      Word: "exception",
      Definitons:
        "something not included in or different from a group of things",
    },
    {
      Word: "hat",
      Definitons:
        "something people wear to cover their heads for fashion or protection",
    },
    {
      Word: "paper",
      Definitons: "pages of a book are made from this",
    },
    {
      Word: "classic",
      Definitons:
        "something popular or famous for a long time and is considered one of the best of its kind",
    },
    {
      Word: "biological",
      Definitons: "something related to life and living things",
    },
    {
      Word: "disaster",
      Definitons: "something that causes a lot of harm or damage",
    },
    {
      Word: "park",
      Definitons: "to put your car or bike in a certain place for a time",
    },
    {
      Word: "burden",
      Definitons: "something that causes worry, difficulty, or hard work",
    },
    {
      Word: "participate",
      Definitons: "to take part with others in doing something",
    },
    {
      Word: "incentive",
      Definitons: "something that encourages a person to work hard",
    },
    {
      Word: "particular",
      Definitons: "one specific (one)",
    },
    {
      Word: "particularly",
      Definitons: "specially; more than others",
    },
    {
      Word: "smooth",
      Definitons:
        "something that feels pleasant and flat when you touch it; not rough",
    },
    {
      Word: "partner",
      Definitons: "someone you have a business or personal relationship with",
    },
    {
      Word: "outcome",
      Definitons: "something that happens as a result, consequence",
    },
    {
      Word: "pass",
      Definitons: "to travel through or near a place",
    },
    {
      Word: "composition",
      Definitons:
        "something that is created from different parts to make something new",
    },
    {
      Word: "priority",
      Definitons:
        "something that is important and must be done before other things",
    },
    {
      Word: "path",
      Definitons: "track made with stones/by walking over the ground",
    },
    {
      Word: "patient",
      Definitons: "not getting annoyed when things take a long time",
    },
    {
      Word: "pattern",
      Definitons: "regular repeated behavior",
    },
    {
      Word: "pause",
      Definitons: "to stop doing for a while before continuing",
    },
    {
      Word: "fact",
      Definitons: "something that is known or proved to be true",
    },
    {
      Word: "payment",
      Definitons: "amount of money that is paid for something",
    },
    {
      Word: "peace",
      Definitons: "time when there is no war or fighting",
    },
    {
      Word: "preference",
      Definitons: "something that is liked or wanted more than another",
    },
    {
      Word: "compound",
      Definitons: "something that is made from two or more other things",
    },
    {
      Word: "prize",
      Definitons: "something that is won in a contest or given as an award",
    },
    {
      Word: "constraint",
      Definitons:
        "something that limits or prevents someone or something from moving",
    },
    {
      Word: "indication",
      Definitons:
        "something that signals that something else exists or will happen",
    },
    {
      Word: "obligation",
      Definitons:
        "something that you do because it is your duty or because you feel you have to",
    },
    {
      Word: "visual",
      Definitons: "something to look at with the eyes",
    },
    {
      Word: "percent",
      Definitons: "one one-hundredth of a whole",
    },
    {
      Word: "percentage",
      Definitons: "part of a whole divided into hundredths",
    },
    {
      Word: "perfect",
      Definitons: "so good it/they cannot be improved",
    },
    {
      Word: "assumption",
      Definitons: "something you believe to be so, but aren't sure of",
    },
    {
      Word: "perform",
      Definitons: "to carry out an action well or successfully",
    },
    {
      Word: "performance",
      Definitons: "activity done to entertain an audience",
    },
    {
      Word: "perhaps",
      Definitons: "possibly, but not certainly; maybe",
    },
    {
      Word: "thing",
      Definitons: "something you cannot remember the name of",
    },
    {
      Word: "pen",
      Definitons: "something you write with that uses ink",
    },
    {
      Word: "rather",
      Definitons: "somewhat; fairly; not that much",
    },
    {
      Word: "personal",
      Definitons: "done by or to a particular person; individual",
    },
    {
      Word: "tone",
      Definitons: "sound of a voice that shows emotion or meaning",
    },
    {
      Word: "alarm",
      Definitons: "sound or light used for a warning or to wake someone",
    },
    {
      Word: "music",
      Definitons: "sounds that are sung or played to give pleasure",
    },
    {
      Word: "perspective",
      Definitons: "way of thinking, an attitude toward something",
    },
    {
      Word: "representation",
      Definitons: "speaking or doing something officially for another person",
    },
    {
      Word: "celebration",
      Definitons: "special event where people show the importance of something",
    },
    {
      Word: "ceremony",
      Definitons: "special social or religious event",
    },
    {
      Word: "phone",
      Definitons: "to talk to someone using a telephone",
    },
    {
      Word: "photo",
      Definitons: "short for photograph; a picture taken by a camera",
    },
    {
      Word: "gear",
      Definitons:
        "special supplies, tools, or clothes needed for a particular activity; machinery that turns power into forward or backward movement",
    },
    {
      Word: "physical",
      Definitons: "concerning the body of a person",
    },
    {
      Word: "rate",
      Definitons: "speed or frequency of events over time",
    },
    {
      Word: "pick",
      Definitons: "to decide on a thing from various choices; select",
    },
    {
      Word: "picture",
      Definitons: "painting, drawing or photograph on paper or screen",
    },
    {
      Word: "piece",
      Definitons: "small part that of something larger",
    },
    {
      Word: "championship",
      Definitons: "sports competition to find the best player or team",
    },
    {
      Word: "from",
      Definitons: "starting at a particular place, time, or level",
    },
    {
      Word: "ease",
      Definitons: "state of being comfortable or relaxed",
    },
    {
      Word: "gender",
      Definitons: "state of being male or female",
    },
    {
      Word: "attendance",
      Definitons: "state of being present at a place or event",
    },
    {
      Word: "existence",
      Definitons: "state of being present, alive, or real",
    },
    {
      Word: "comfort",
      Definitons: "state of being relaxed, warm, or happy",
    },
    {
      Word: "exposure",
      Definitons: "state of experiencing something directly",
    },
    {
      Word: "plane",
      Definitons: "an airplane",
    },
    {
      Word: "happiness",
      Definitons: "state of feeling pleased; feeling of satisfaction",
    },
    {
      Word: "plant",
      Definitons: "living thing with leaves and roots growing in soil",
    },
    {
      Word: "complexity",
      Definitons: "state of having many parts and not being simple",
    },
    {
      Word: "diversity",
      Definitons: "state or quality of having a range of different things",
    },
    {
      Word: "stair",
      Definitons: "steps that go from one level to another",
    },
    {
      Word: "player",
      Definitons: "person who plays sports",
    },
    {
      Word: "tale",
      Definitons: "story about colorful and imaginary events",
    },
    {
      Word: "please",
      Definitons: "you say this when you politely ask people for things",
    },
    {
      Word: "pleasure",
      Definitons: "feeling of happiness, enjoyment, or satisfaction",
    },
    {
      Word: "plus",
      Definitons: "having a value greater than zero",
    },
    {
      Word: "side",
      Definitons: "straight edge of an object",
    },
    {
      Word: "guitar",
      Definitons: "stringed musical instrument played with the fingers",
    },
    {
      Word: "attachment",
      Definitons: "strong affection for someone",
    },
    {
      Word: "barrier",
      Definitons: "structure or object that stops free movement",
    },
    {
      Word: "philosophy",
      Definitons: "study of ideas about the fundamental nature of life",
    },
    {
      Word: "police",
      Definitons: "people, often in uniforms, who solve crimes",
    },
    {
      Word: "history",
      Definitons: "study of past event",
    },
    {
      Word: "mathematics",
      Definitons: "study or science of numbers and shapes",
    },
    {
      Word: "politics",
      Definitons: "activities influencing the policies of a government",
    },
    {
      Word: "dramatic",
      Definitons: "sudden and extreme",
    },
    {
      Word: "flash",
      Definitons: "sudden bright light",
    },
    {
      Word: "pool",
      Definitons:
        "large container or hole that is filled with water and used for people to swim in",
    },
    {
      Word: "poor",
      Definitons: "without money; not rich",
    },
    {
      Word: "pop",
      Definitons: "to cause something to open or burst suddenly",
    },
    {
      Word: "popular",
      Definitons: "liked or enjoyed by many people",
    },
    {
      Word: "formal",
      Definitons: "suitable for serious, official, or important occasions",
    },
    {
      Word: "number",
      Definitons: "symbols such as 1, 2, 56, 793",
    },
    {
      Word: "lecture",
      Definitons: "talk or speech about a particular subject",
    },
    {
      Word: "position",
      Definitons: "specific location where someone or something is",
    },
    {
      Word: "positive",
      Definitons: "good or useful in qualities, constructive, confident",
    },
    {
      Word: "sweet",
      Definitons: "tasting like sugar; containing sugar",
    },
    {
      Word: "examination",
      Definitons: "test of your knowledge of, or ability in something",
    },
    {
      Word: "possibility",
      Definitons: "something with a chance of happening or being true",
    },
    {
      Word: "exam",
      Definitons: "test of your knowledge or ability in something",
    },
    {
      Word: "possibly",
      Definitons: "may be true or likely, but is uncertain",
    },
    {
      Word: "post",
      Definitons: "to send a letter or package using the post office",
    },
    {
      Word: "potentially",
      Definitons: "that could happen or become reality",
    },
    {
      Word: "concentration",
      Definitons:
        "the ability to direct all your effort and attention on the one thing you are doing and nothing else",
    },
    {
      Word: "potential",
      Definitons: "capable of happening or becoming reality",
    },
    {
      Word: "imagination",
      Definitons:
        "the ability to think of new ideas or things that are not real",
    },
    {
      Word: "pound",
      Definitons: "unit of weight equal to 16 ounces or 0.4536 kg",
    },
    {
      Word: "selection",
      Definitons:
        "the act of carefully choosing something or someone from a group",
    },
    {
      Word: "entry",
      Definitons: "the act of going into some place",
    },
    {
      Word: "immigration",
      Definitons: "the act of moving from one country to another for good",
    },
    {
      Word: "powerful",
      Definitons: "having control or influence over",
    },
    {
      Word: "practice",
      Definitons: "to do something many times to improve a skill",
    },
    {
      Word: "bath",
      Definitons: "the cleaning of a body by putting it completely into water",
    },
    {
      Word: "shower",
      Definitons: "the cleaning of a body by standing under falling water",
    },
    {
      Word: "east",
      Definitons: "the direction where the sun rises",
    },
    {
      Word: "measurement",
      Definitons: "the finding of the size or amount of something or someone",
    },
    {
      Word: "predict",
      Definitons: "to guess or estimate what will or might happen",
    },
    {
      Word: "prefer",
      Definitons: "to like something better than something else",
    },
    {
      Word: "chest",
      Definitons: "the front of your body between your neck and your waist",
    },
    {
      Word: "outline",
      Definitons:
        "the main ideas or facts about something, without the details",
    },
    {
      Word: "king",
      Definitons: "the male ruler of a country that has a royal family",
    },
    {
      Word: "meat",
      Definitons:
        "the muscles and soft parts of animals or birds that is eaten as food",
    },
    {
      Word: "unemployment",
      Definitons:
        "the number of people in an area who want to work but do not have a job",
    },
    {
      Word: "prepare",
      Definitons: "to make something ready for use",
    },
    {
      Word: "ear",
      Definitons: "the part of the head that you hear with",
    },
    {
      Word: "half",
      Definitons: "the part you get when one is divided into two; ½",
    },
    {
      Word: "I",
      Definitons: "the person who is speaking or writing",
    },
    {
      Word: "prospect",
      Definitons:
        "the possibility that something might happen in the future, especially something good",
    },
    {
      Word: "press",
      Definitons: "to push something against something else",
    },
    {
      Word: "pressure",
      Definitons: "force/weight when pressing against a thing",
    },
    {
      Word: "discipline",
      Definitons:
        "the teaching of self-control through instruction and practice",
    },
    {
      Word: "narrative",
      Definitons: "the telling of a story",
    },
    {
      Word: "pretty",
      Definitons: "being attractive to the eye in a simple way",
    },
    {
      Word: "prevent",
      Definitons: "to stop something from happening or existing",
    },
    {
      Word: "previous",
      Definitons: "existing or happening before the present time",
    },
    {
      Word: "previously",
      Definitons: "at an earlier time",
    },
    {
      Word: "peak",
      Definitons:
        "the time or place when something or someone is best, greatest, highest",
    },
    {
      Word: "diet",
      Definitons: "the type of food that a person or animal usually eats",
    },
    {
      Word: "self",
      Definitons: "the type of person you really are",
    },
    {
      Word: "primary",
      Definitons: "most important, most basic or essential",
    },
    {
      Word: "consequently",
      Definitons: "therefore; as a result of something",
    },
    {
      Word: "string",
      Definitons: "thin rope",
    },
    {
      Word: "wire",
      Definitons: "thin, flexible thread of metal",
    },
    {
      Word: "book",
      Definitons: "thing made of pages with writing on that you read",
    },
    {
      Word: "anything",
      Definitons: "thing of any kind; used to refer to a thing in questions",
    },
    {
      Word: "private",
      Definitons: "personal; not to be seen by everyone",
    },
    {
      Word: "something",
      Definitons: "thing that is not yet known or named",
    },
    {
      Word: "brush",
      Definitons: "thing used to comb your hair or to clean the floor",
    },
    {
      Word: "view",
      Definitons: "things you are able to see from a specific place",
    },
    {
      Word: "clothing",
      Definitons: "things you wear on your body",
    },
    {
      Word: "careful",
      Definitons:
        "thinking about what you are doing in order to avoid a mistake",
    },
    {
      Word: "future",
      Definitons: "time that is to come after the present",
    },
    {
      Word: "procedure",
      Definitons: "usual or standard way in which something is done",
    },
    {
      Word: "proceed",
      Definitons: "to continue to do something; carry on",
    },
    {
      Word: "pregnancy",
      Definitons: "time when a female is going to have a baby",
    },
    {
      Word: "produce",
      Definitons: "to manufacture something using machines",
    },
    {
      Word: "retirement",
      Definitons: "time when someone has stopped working because of their age",
    },
    {
      Word: "production",
      Definitons: "process of making something on a large scale",
    },
    {
      Word: "night",
      Definitons: "time when sun does not shine ",
    },
    {
      Word: "deeply",
      Definitons: "to a great, intense, or extreme extent",
    },
    {
      Word: "submit",
      Definitons: "to accept a superior force has power over you",
    },
    {
      Word: "profit",
      Definitons: "to earn money from something",
    },
    {
      Word: "acknowledge",
      Definitons: "to accept that something is true",
    },
    {
      Word: "progress",
      Definitons: "to move forward or toward a place or goal",
    },
    {
      Word: "project",
      Definitons: "a planned piece of work for specific purpose",
    },
    {
      Word: "promise",
      Definitons: "to say you will certainly do something",
    },
    {
      Word: "promote",
      Definitons: "to try to encourage the popularity and sales of a product",
    },
    {
      Word: "pretend",
      Definitons: "to act as if something is true when it is not",
    },
    {
      Word: "behave",
      Definitons: "to act in a particular way; to act correctly",
    },
    {
      Word: "help",
      Definitons: "to act to enable a person to do something; assist",
    },
    {
      Word: "proper",
      Definitons: "correct according to social or moral rules",
    },
    {
      Word: "do",
      Definitons: "to act; to perform actions",
    },
    {
      Word: "proposal",
      Definitons: "offer or plan to people who can decide about it",
    },
    {
      Word: "propose",
      Definitons: "to offer or put forward an idea for consideration",
    },
    {
      Word: "process",
      Definitons: "to adopt a set of actions that produce a particular result",
    },
    {
      Word: "protect",
      Definitons: "to defend someone or something from harm or danger",
    },
    {
      Word: "protection",
      Definitons: "being kept from harm",
    },
    {
      Word: "crack",
      Definitons: "to almost break something",
    },
    {
      Word: "seem",
      Definitons: "to appear to be something",
    },
    {
      Word: "prove",
      Definitons: "to demonstrate truth by providing evidence",
    },
    {
      Word: "question",
      Definitons: "to ask for or try to get information",
    },
    {
      Word: "bless",
      Definitons: "to ask the gods to protect someone or something",
    },
    {
      Word: "spell",
      Definitons:
        "to be able to say, write, or print the letters that make up a word",
    },
    {
      Word: "can",
      Definitons: "to be able to; have the skill to; have the time to",
    },
    {
      Word: "live",
      Definitons: "to be alive",
    },
    {
      Word: "attach",
      Definitons: "to be associated or connected with",
    },
    {
      Word: "feel",
      Definitons: "to be aware of or experience an emotion or sensation",
    },
    {
      Word: "pull",
      Definitons: "to hold something and move it toward you",
    },
    {
      Word: "hear",
      Definitons: "to be aware of sound; to perceive with the ear",
    },
    {
      Word: "purchase",
      Definitons: "to buy something; to get by paying money for it",
    },
    {
      Word: "exceed",
      Definitons: "to be greater in number than something",
    },
    {
      Word: "purpose",
      Definitons: "reason for which something is done; aim; goal",
    },
    {
      Word: "sit",
      Definitons: "to be in a resting position on a chair",
    },
    {
      Word: "push",
      Definitons: "to force something away from you",
    },
    {
      Word: "remain",
      Definitons: "to be left behind, to continue to exist",
    },
    {
      Word: "differ",
      Definitons: "to be not the same as others",
    },
    {
      Word: "regret",
      Definitons: "to be sorry about something",
    },
    {
      Word: "quality",
      Definitons: "high level of worth or excellence",
    },
    {
      Word: "result",
      Definitons: "to be the outcome of other causes and effects",
    },
    {
      Word: "quarter",
      Definitons: "one of four equal parts of something",
    },
    {
      Word: "lose",
      Definitons: "to be unable to find something you once had",
    },
    {
      Word: "quick",
      Definitons: "using very little time; moving far in little time",
    },
    {
      Word: "quickly",
      Definitons: "without taking a lot of time; fast",
    },
    {
      Word: "quiet",
      Definitons: "not loud; making very little sound",
    },
    {
      Word: "need",
      Definitons: "to be unable to manage without something; require",
    },
    {
      Word: "stand",
      Definitons: "to be upright; not be sitting or lying down",
    },
    {
      Word: "quote",
      Definitons: "to use someone's exact words in your writing or speech",
    },
    {
      Word: "freeze",
      Definitons: "to become hard because of very cold temperatures",
    },
    {
      Word: "recover",
      Definitons: "to become healthy after an illness or injury; to get better",
    },
    {
      Word: "radio",
      Definitons: "system for sending and receiving signals through the air",
    },
    {
      Word: "disappear",
      Definitons: "to become impossible to see",
    },
    {
      Word: "rain",
      Definitons: "drops of water that fall out of clouds in the sky",
    },
    {
      Word: "raise",
      Definitons: "to increase a quantity, size, intensity or price",
    },
    {
      Word: "undertake",
      Definitons: "to begin or attempt, commit oneself to and begin",
    },
    {
      Word: "range",
      Definitons: "limits within which something extends or varies",
    },
    {
      Word: "become",
      Definitons: "to begin to be; grow to be; develop into",
    },
    {
      Word: "arise",
      Definitons: "to begin, to start to happen",
    },
    {
      Word: "react",
      Definitons: "to behave or make a change in a particular way",
    },
    {
      Word: "expect",
      Definitons: "to believe something is probably going to happen",
    },
    {
      Word: "reckon",
      Definitons:
        "to believe that something is true or possible; to calculate or guess",
    },
    {
      Word: "lean",
      Definitons:
        "to bend or move someone's body in a particular direction; (adj) very little fat",
    },
    {
      Word: "burst",
      Definitons: "to break in a sudden and violent way",
    },
    {
      Word: "split",
      Definitons: "to break something into pieces or divide something",
    },
    {
      Word: "sigh",
      Definitons: "to breathe out in a way to show boredom or disappointment",
    },
    {
      Word: "remember",
      Definitons: "to bring a previous image or idea to your mind",
    },
    {
      Word: "import",
      Definitons: "to bring items or goods from one country into another",
    },
    {
      Word: "reaction",
      Definitons: "feeling or action in response to something",
    },
    {
      Word: "construct",
      Definitons: "to build or create something",
    },
    {
      Word: "reader",
      Definitons: "person who reads written or printed materials",
    },
    {
      Word: "insure",
      Definitons: "to buy protection against possible loss or injury",
    },
    {
      Word: "reality",
      Definitons: "what is true, as opposed to what is imagined",
    },
    {
      Word: "realize",
      Definitons: "to become aware of or understand mentally",
    },
    {
      Word: "love",
      Definitons: "to care for and like someone very strong and deeply",
    },
    {
      Word: "send",
      Definitons: "to cause mail or package to go to another place",
    },
    {
      Word: "embarrass",
      Definitons: "to cause someone to feel uncomfortable about something",
    },
    {
      Word: "reasonable",
      Definitons: "fair and sensible; appropriate",
    },
    {
      Word: "move",
      Definitons: "to cause something to change to a different place",
    },
    {
      Word: "recall",
      Definitons: "to remember events or details of the past",
    },
    {
      Word: "convert",
      Definitons: "to change form, character, or function to another",
    },
    {
      Word: "recent",
      Definitons: "happening or beginning not long ago",
    },
    {
      Word: "recently",
      Definitons: "just a while ago; not long ago",
    },
    {
      Word: "update",
      Definitons: "to change something by adding the most recent information",
    },
    {
      Word: "adapt",
      Definitons: "to change something to fit or suit a new purpose",
    },
    {
      Word: "recognize",
      Definitons: "to remember because you have met it before",
    },
    {
      Word: "recommend",
      Definitons: "to say something is good and deserves to be chosen",
    },
    {
      Word: "transform",
      Definitons: "to change the shape of something completely",
    },
    {
      Word: "translate",
      Definitons: "to change words from one language into another",
    },
    {
      Word: "edit",
      Definitons: "to check and makes changes before publication",
    },
    {
      Word: "red",
      Definitons: "being the color of blood",
    },
    {
      Word: "reduce",
      Definitons: "to make something smaller or use less of it",
    },
    {
      Word: "wipe",
      Definitons: "to clean or dry something with a cloth",
    },
    {
      Word: "refer",
      Definitons: "to talk about or write about something",
    },
    {
      Word: "reference",
      Definitons: "to cite a piece of research in speech or in writing",
    },
    {
      Word: "shut",
      Definitons: "to close something",
    },
    {
      Word: "reform",
      Definitons: "to improve society by removing abuse and injustices",
    },
    {
      Word: "integrate",
      Definitons: "to combine together; make into one thing",
    },
    {
      Word: "refuse",
      Definitons: "to say that you will not accept something",
    },
    {
      Word: "regard",
      Definitons: "to pay attention to someone or something",
    },
    {
      Word: "follow",
      Definitons: "to come after someone; be guided by someone",
    },
    {
      Word: "return",
      Definitons: "to come back to a place again",
    },
    {
      Word: "register",
      Definitons: "to record your name on an official list; sign up",
    },
    {
      Word: "reach",
      Definitons: "to come to or arrive at a goal or destination",
    },
    {
      Word: "meet",
      Definitons: "to come together at a certain time or place",
    },
    {
      Word: "regular",
      Definitons: "occurring or being done frequently",
    },
    {
      Word: "cluster",
      Definitons:
        "to come together to form a group of people, animals, or things",
    },
    {
      Word: "compose",
      Definitons: "to come together to form or make something",
    },
    {
      Word: "regulation",
      Definitons: "official rule that controls how something is done",
    },
    {
      Word: "relate",
      Definitons: "to understand or sympathize with someone or something",
    },
    {
      Word: "relationship",
      Definitons:
        "manner in which people, groups or countries behave toward one another",
    },
    {
      Word: "relative",
      Definitons: "measured or considered in comparison to something else",
    },
    {
      Word: "relatively",
      Definitons:
        "in a manner that measures or compares something to something else",
    },
    {
      Word: "eliminate",
      Definitons: "to completely remove; to get rid of",
    },
    {
      Word: "retain",
      Definitons: "to continue to have or use something; to keep",
    },
    {
      Word: "religious",
      Definitons: "concerning religion or faith",
    },
    {
      Word: "drive",
      Definitons: "to control a vehicle so that it moves somewhere",
    },
    {
      Word: "wrap",
      Definitons:
        "to cover something on all sides with a piece of material or paper",
    },
    {
      Word: "make",
      Definitons: "to create something by putting things together",
    },
    {
      Word: "invent",
      Definitons: "to create something useful for the first time",
    },
    {
      Word: "remind",
      Definitons: "to make someone remember something",
    },
    {
      Word: "cope",
      Definitons: "to deal successfully with a difficult problem",
    },
    {
      Word: "remove",
      Definitons: "to move, erase or take away from a place",
    },
    {
      Word: "rent",
      Definitons: "to pay money for the use of something",
    },
    {
      Word: "devote",
      Definitons: "to decide to use or give something for something else",
    },
    {
      Word: "repeat",
      Definitons: "to say something again",
    },
    {
      Word: "replace",
      Definitons: "to use instead of something else",
    },
    {
      Word: "reply",
      Definitons: "answer someone's question",
    },
    {
      Word: "want",
      Definitons: "to desire or wish for something; hope for a thing",
    },
    {
      Word: "price",
      Definitons: "to determine or set the cost of something",
    },
    {
      Word: "representative",
      Definitons: "typical of a particular group or thing",
    },
    {
      Word: "request",
      Definitons: "to ask for something",
    },
    {
      Word: "require",
      Definitons: "to need something, to make it necessary",
    },
    {
      Word: "requirement",
      Definitons: "something that is a necessity",
    },
    {
      Word: "weigh",
      Definitons: "to determine the weight of, using scales",
    },
    {
      Word: "research",
      Definitons: "to carefully study to find and report new knowledge",
    },
    {
      Word: "grow",
      Definitons: "to develop and become bigger or taller over time",
    },
    {
      Word: "resident",
      Definitons: "someone who lives in a particular place",
    },
    {
      Word: "derive",
      Definitons: "to develop or get something from something else",
    },
    {
      Word: "control",
      Definitons: "to direct or influence the behavior of something",
    },
    {
      Word: "detect",
      Definitons: "to discover or identify the presence of something",
    },
    {
      Word: "find",
      Definitons: "to discover something by looking for it",
    },
    {
      Word: "consult",
      Definitons: "to discuss something to make a decision",
    },
    {
      Word: "exhibit",
      Definitons: "to display or make available for people to see",
    },
    {
      Word: "resource",
      Definitons: "essential supply of something",
    },
    {
      Word: "respect",
      Definitons:
        "to think very highly of another person because of what they do",
    },
    {
      Word: "play",
      Definitons: "to do or perform a game or sport",
    },
    {
      Word: "respond",
      Definitons: "to say or write to answer the question",
    },
    {
      Word: "response",
      Definitons: "something said or written as an answer to something",
    },
    {
      Word: "responsibility",
      Definitons: "state of being dependable or reliable",
    },
    {
      Word: "responsible",
      Definitons:
        "having the duty of dealing with something; being the cause or creator of something; behaving in a mature and reasonable manner",
    },
    {
      Word: "rest",
      Definitons: "time when one relaxes, sleeps, or is inactive",
    },
    {
      Word: "restaurant",
      Definitons: "place where you can order, buy and eat a meal",
    },
    {
      Word: "fulfill",
      Definitons: "to do something that was promised or required",
    },
    {
      Word: "rush",
      Definitons: "to do something very quickly",
    },
    {
      Word: "use",
      Definitons: "to do something with, for a task or purpose",
    },
    {
      Word: "continue",
      Definitons: "to do something without stopping, or after pausing",
    },
    {
      Word: "begin",
      Definitons: "to do the first part of an action; to start",
    },
    {
      Word: "solar",
      Definitons: "to do with the sun, like sunlight or the heat from the sun",
    },
    {
      Word: "consume",
      Definitons: "to eat, drink, buy or use up something",
    },
    {
      Word: "be",
      Definitons:
        "To exist; to be alive; used to give information about someone or something",
    },
    {
      Word: "anticipate",
      Definitons: "to expect or look ahead to something positively",
    },
    {
      Word: "reveal",
      Definitons: "to make known, to show or prove",
    },
    {
      Word: "revenue",
      Definitons: "money that is made by or paid to a business",
    },
    {
      Word: "undergo",
      Definitons: "to experience something, often bad",
    },
    {
      Word: "review",
      Definitons: "to carefully look at the quality of something",
    },
    {
      Word: "show",
      Definitons: "to explain or teach how something is done",
    },
    {
      Word: "praise",
      Definitons: "to express approval of something or someone",
    },
    {
      Word: "protest",
      Definitons: "to express opposition through action or words",
    },
    {
      Word: "neglect",
      Definitons: "to fail to take care of something",
    },
    {
      Word: "rich",
      Definitons: "having a lot of money, possessions, or resources",
    },
    {
      Word: "admire",
      Definitons: "to feel respect or wonder toward someone",
    },
    {
      Word: "ride",
      Definitons: "to sit on and control a horse or vehicle",
    },
    {
      Word: "occupy",
      Definitons: "to fill a time, a space, or an area",
    },
    {
      Word: "rise",
      Definitons: "to move from a lower position to a higher one",
    },
    {
      Word: "risk",
      Definitons: "to take the chance that you may do something dangerous",
    },
    {
      Word: "river",
      Definitons: "flowing water that runs from mountains to the sea",
    },
    {
      Word: "road",
      Definitons: "long piece of hard land for cars to travel on",
    },
    {
      Word: "rock",
      Definitons: "big stone; hard, solid substance forming mountains",
    },
    {
      Word: "role",
      Definitons: "character played by an actor",
    },
    {
      Word: "roll",
      Definitons: "to move along a surface by turning many times",
    },
    {
      Word: "resolve",
      Definitons: "to find an answer or way to handle a problem",
    },
    {
      Word: "calculate",
      Definitons: "to find an answer using mathematics",
    },
    {
      Word: "root",
      Definitons: "part of a plant that grows underground",
    },
    {
      Word: "compute",
      Definitons: "to find out by calculating or estimating",
    },
    {
      Word: "like",
      Definitons: "to find something pleasing; to prefer something",
    },
    {
      Word: "round",
      Definitons: "being in the shape of a circle or ball",
    },
    {
      Word: "route",
      Definitons: "way to get from one place to another place",
    },
    {
      Word: "trace",
      Definitons: "to find, describe or discover by investigation",
    },
    {
      Word: "stop",
      Definitons: "to finish moving or to come to an end",
    },
    {
      Word: "repair",
      Definitons: "to fix something that is broken; fix",
    },
    {
      Word: "rule",
      Definitons: "statement that says how things should be",
    },
    {
      Word: "study",
      Definitons: "to focus on learning something usually at school",
    },
    {
      Word: "specialize",
      Definitons: "to focus on one area of a field or profession",
    },
    {
      Word: "chase",
      Definitons: "to follow and try to catch someone or something",
    },
    {
      Word: "safe",
      Definitons: "being out of danger",
    },
    {
      Word: "safety",
      Definitons: "state of being free from harm or danger",
    },
    {
      Word: "pursue",
      Definitons:
        "to follow and try to catch something; to try to get something",
    },
    {
      Word: "cough",
      Definitons: "to force air through your throat with a short, loud noise",
    },
    {
      Word: "evaluate",
      Definitons: "to form an idea to judge something carefully",
    },
    {
      Word: "poll",
      Definitons:
        "to get information by asking many people questions about a particular subject",
    },
    {
      Word: "learn",
      Definitons: "to get knowledge or skills by study or experience",
    },
    {
      Word: "recruit",
      Definitons: "to get people to come and work, join, or study with you",
    },
    {
      Word: "buy",
      Definitons: "to get something by paying money for it",
    },
    {
      Word: "receive",
      Definitons: "to get something that someone has given or sent to you",
    },
    {
      Word: "deserve",
      Definitons:
        "to get the appropriate reward or punishment for the way you behaved or something you did",
    },
    {
      Word: "satisfy",
      Definitons: "to be happy because you met your expectation",
    },
    {
      Word: "save",
      Definitons: "to rescue someone or something from a bad situation",
    },
    {
      Word: "qualify",
      Definitons:
        "to get the necessary skill or knowledge to do a particular job or activity",
    },
    {
      Word: "scale",
      Definitons: "a device that is used to weigh a person or thing",
    },
    {
      Word: "persuade",
      Definitons: "to get you to do/believe something, by giving reasons",
    },
    {
      Word: "excuse",
      Definitons: "to give a reason to explain why you did something",
    },
    {
      Word: "scene",
      Definitons: "part of an act in a play",
    },
    {
      Word: "schedule",
      Definitons: "to arrange a time to do something with others",
    },
    {
      Word: "scheme",
      Definitons: "often dishonest plan to get or do something",
    },
    {
      Word: "communicate",
      Definitons: "to give and exchange information",
    },
    {
      Word: "support",
      Definitons: "to give assistance or advice to someone",
    },
    {
      Word: "science",
      Definitons: "knowledge of the physical world based on facts",
    },
    {
      Word: "pay",
      Definitons: "to give money for goods or work done",
    },
    {
      Word: "deal",
      Definitons: "to give out (cards, etc.) to; distribute",
    },
    {
      Word: "score",
      Definitons: "to get points in a sport such as kicking a ball into a goal",
    },
    {
      Word: "justify",
      Definitons: "to give reasons why you did something or why it is right",
    },
    {
      Word: "screen",
      Definitons: "flat surface on a computer, or tv that shows images",
    },
    {
      Word: "sea",
      Definitons: "place with a large amount of salt water",
    },
    {
      Word: "assign",
      Definitons: "to give someone a particular job or something to do",
    },
    {
      Word: "search",
      Definitons: "to carefully look for something",
    },
    {
      Word: "season",
      Definitons:
        "one of the four parts of the year determined mainly by the weather during that time",
    },
    {
      Word: "reward",
      Definitons: "to give something to someone because of their good work",
    },
    {
      Word: "offer",
      Definitons: "to give the opportunity to accept something",
    },
    {
      Word: "entitle",
      Definitons: "to give the right to do or have something to someone",
    },
    {
      Word: "section",
      Definitons: "one of the parts that form something",
    },
    {
      Word: "sector",
      Definitons: "area that includes certain kinds of job",
    },
    {
      Word: "secure",
      Definitons: "to protect something from danger or harm, keep things safe",
    },
    {
      Word: "lend",
      Definitons: "to give to someone for a while before it is returned",
    },
    {
      Word: "yield",
      Definitons: "to give way to someone or something else",
    },
    {
      Word: "seek",
      Definitons: "to search for; to try to find; look for",
    },
    {
      Word: "dedicate",
      Definitons: "to give your energy, time, etc., completely to someone",
    },
    {
      Word: "sink",
      Definitons: "to go down below the surface of water, mud, etc.",
    },
    {
      Word: "select",
      Definitons: "to choose from a group, something most suitable",
    },
    {
      Word: "reverse",
      Definitons: "to go in the opposite direction",
    },
    {
      Word: "accompany",
      Definitons: "to go somewhere with someone",
    },
    {
      Word: "sell",
      Definitons: "to exchange something for money",
    },
    {
      Word: "visit",
      Definitons: "to go to a place for a time, usually for a reason",
    },
    {
      Word: "senior",
      Definitons: "having higher status or authority than another person",
    },
    {
      Word: "sense",
      Definitons: "to perceive using sight, sound, taste touch or hearing",
    },
    {
      Word: "develop",
      Definitons: "to grow bigger, more complex, or more advanced",
    },
    {
      Word: "sentence",
      Definitons: "set of spoken or written words that make a whole statement",
    },
    {
      Word: "separate",
      Definitons:
        "to divide into parts, or to make something divide into parts",
    },
    {
      Word: "distribute",
      Definitons: "to hand in or deliver something to people",
    },
    {
      Word: "series",
      Definitons: "number of things that happen one after another",
    },
    {
      Word: "serious",
      Definitons:
        "needing thought or concentration; important; in a sober manner",
    },
    {
      Word: "give",
      Definitons: "to hand over or present something to someone",
    },
    {
      Word: "serve",
      Definitons: "to give or provide something to another person",
    },
    {
      Word: "disagree",
      Definitons: "to have a different opinion from someone",
    },
    {
      Word: "negotiate",
      Definitons: "to have a formal discussion to reach an agreement",
    },
    {
      Word: "settle",
      Definitons: "to move to a new environment and become accustomed to it",
    },
    {
      Word: "mean",
      Definitons: "to have a particular meaning or value",
    },
    {
      Word: "think",
      Definitons: "to have an idea, opinion, or belief about something",
    },
    {
      Word: "keep",
      Definitons: "to have and continue to hold something",
    },
    {
      Word: "sex",
      Definitons: "state of being male or female mostly biological",
    },
    {
      Word: "dare",
      Definitons: "to have enough courage to do something",
    },
    {
      Word: "know",
      Definitons: "to have knowledge of things in your mind",
    },
    {
      Word: "shake",
      Definitons: "to move something violently back and forth or up and down",
    },
    {
      Word: "shall",
      Definitons: "expressing the future tense, to expect to happen",
    },
    {
      Word: "shape",
      Definitons: "outer form of something, what it looks like",
    },
    {
      Word: "involve",
      Definitons: "to have or be included as a part of something",
    },
    {
      Word: "encounter",
      Definitons:
        "to have or experience something, often unpleasant or difficult",
    },
    {
      Word: "possess",
      Definitons: "to have or own something",
    },
    {
      Word: "dominate",
      Definitons: "to have power or influence over",
    },
    {
      Word: "correspond",
      Definitons: "to have similarity or equality with something",
    },
    {
      Word: "assist",
      Definitons: "to help",
    },
    {
      Word: "boost",
      Definitons: "to help increasing progress or growth",
    },
    {
      Word: "sponsor",
      Definitons: "to help someone or something succeed by giving them money ",
    },
    {
      Word: "shift",
      Definitons: "to change in position or direction",
    },
    {
      Word: "crash",
      Definitons: "to hit something hard enough to cause serious damage",
    },
    {
      Word: "ship",
      Definitons: "large boat",
    },
    {
      Word: "shock",
      Definitons: "sudden bad feeling caused by something unexpected",
    },
    {
      Word: "shoot",
      Definitons: "to kick or throw a ball at a goal",
    },
    {
      Word: "shop",
      Definitons: "place which sells things",
    },
    {
      Word: "tap",
      Definitons: "to hit something lightly",
    },
    {
      Word: "short",
      Definitons: "small distance from one end to the other",
    },
    {
      Word: "knock",
      Definitons: "to hit something to get people's attention",
    },
    {
      Word: "embrace",
      Definitons: "to hold someone closely",
    },
    {
      Word: "harm",
      Definitons: "to hurt, damage, or cause problems",
    },
    {
      Word: "incorporate",
      Definitons: "to include or involve as part of something else",
    },
    {
      Word: "point",
      Definitons: "to indicate something with your finger to others",
    },
    {
      Word: "unite",
      Definitons: "to join or come together as one",
    },
    {
      Word: "isolate",
      Definitons: "to keep in a place or situation apart from others",
    },
    {
      Word: "preserve",
      Definitons: "to keep something in an unchanged or perfect condition",
    },
    {
      Word: "understand",
      Definitons: "to know the meaning of language, what someone says",
    },
    {
      Word: "significant",
      Definitons: "large enough to be noticed or have an effect; important",
    },
    {
      Word: "resign",
      Definitons: "to leave a job because you want to",
    },
    {
      Word: "abandon",
      Definitons:
        "to leave someone or something you are responsible for and not return",
    },
    {
      Word: "allow",
      Definitons: "to let or permit someone do something",
    },
    {
      Word: "underlie",
      Definitons: "to lie or exist beneath",
    },
    {
      Word: "counsel",
      Definitons: "to listen and give expert advice to someone",
    },
    {
      Word: "similar",
      Definitons: "nearly the same",
    },
    {
      Word: "simple",
      Definitons: "not hard to understand or do; not complex",
    },
    {
      Word: "simply",
      Definitons: "in an easy or clear manner",
    },
    {
      Word: "care",
      Definitons: "to look after someone or something",
    },
    {
      Word: "sing",
      Definitons: "to make musical sounds with your voice",
    },
    {
      Word: "single",
      Definitons: "only, merely",
    },
    {
      Word: "read",
      Definitons: "to look at and comprehend the meaning some writing",
    },
    {
      Word: "watch",
      Definitons: "to look at carefully to work out what is happening",
    },
    {
      Word: "sister",
      Definitons: "female you share a parent with",
    },
    {
      Word: "stare",
      Definitons: "to look at someone or something for a long time",
    },
    {
      Word: "glance",
      Definitons: "to look at someone or something quickly",
    },
    {
      Word: "situation",
      Definitons: "condition, location or position",
    },
    {
      Word: "size",
      Definitons: "how big or small a thing is",
    },
    {
      Word: "scan",
      Definitons: "to look within something for a particular person or thing",
    },
    {
      Word: "skill",
      Definitons: "ability to do something well",
    },
    {
      Word: "fade",
      Definitons: "to lose strength or freshness",
    },
    {
      Word: "service",
      Definitons: "to maintain a piece of machinery so it runs well",
    },
    {
      Word: "sleep",
      Definitons: "to rest your body in bed, as at night time",
    },
    {
      Word: "sustain",
      Definitons: "to maintain, lengthen or continue to do something",
    },
    {
      Word: "alter",
      Definitons: "to make a change to something",
    },
    {
      Word: "decide",
      Definitons: "to make a choice about something or choose after thinking",
    },
    {
      Word: "slightly",
      Definitons: "concerning a small quantity or degree",
    },
    {
      Word: "boom",
      Definitons: "to make a deep hollow resonant sound",
    },
    {
      Word: "pour",
      Definitons: "to make a liquid flow from one container into another",
    },
    {
      Word: "slow",
      Definitons: "moving or happening without speed; not fast",
    },
    {
      Word: "swear",
      Definitons: "to make a serious promise to do something",
    },
    {
      Word: "scream",
      Definitons: "to make a sudden loud cry",
    },
    {
      Word: "bet",
      Definitons:
        "to make an agreement on the results of an event where the losers give something (usually money) to the winner",
    },
    {
      Word: "smoke",
      Definitons: "to breathe in through a cigarette and then blow it out",
    },
    {
      Word: "try",
      Definitons: "to make an effort, to attempt to do something",
    },
    {
      Word: "provide",
      Definitons: "to make available; to supply for use",
    },
    {
      Word: "shine",
      Definitons: "to make bright light",
    },
    {
      Word: "craft",
      Definitons: "to make by hand and with much skill",
    },
    {
      Word: "society",
      Definitons: "community of people living together",
    },
    {
      Word: "revise",
      Definitons: "to make changes to improve something",
    },
    {
      Word: "software",
      Definitons: "market for software is expected to expand",
    },
    {
      Word: "note",
      Definitons: "to make mention of something; to make a remark",
    },
    {
      Word: "soldier",
      Definitons: "person who is in the military",
    },
    {
      Word: "complicate",
      Definitons: "to make more difficult",
    },
    {
      Word: "solution",
      Definitons: "something that ends a problem",
    },
    {
      Word: "solve",
      Definitons: "to find a way to deal with a problem",
    },
    {
      Word: "change",
      Definitons: "to make or become different, or into something else",
    },
    {
      Word: "somebody",
      Definitons: "person who is not known or named",
    },
    {
      Word: "increase",
      Definitons: "to make or become something larger in size or amount",
    },
    {
      Word: "someone",
      Definitons: "person who is not known or named",
    },
    {
      Word: "regulate",
      Definitons: "to make rules or laws to control something or someone",
    },
    {
      Word: "sometimes",
      Definitons: "only at certain times; occasionally",
    },
    {
      Word: "impress",
      Definitons: "to make someone admire or respect another person or thing",
    },
    {
      Word: "somewhere",
      Definitons: "at or to an unknown or unnamed place",
    },
    {
      Word: "son",
      Definitons: "male child; friendly way of addressing a boy",
    },
    {
      Word: "song",
      Definitons: "some music with words in verse",
    },
    {
      Word: "frighten",
      Definitons: "to make someone afraid or nervous",
    },
    {
      Word: "sorry",
      Definitons: "what you say to admit you were wrong",
    },
    {
      Word: "trick",
      Definitons: "to make someone believe something that is not true",
    },
    {
      Word: "motivate",
      Definitons: "to make someone excited about doing something",
    },
    {
      Word: "source",
      Definitons: "produces or provides what is wanted or needed",
    },
    {
      Word: "south",
      Definitons: "direction that is the opposite of north",
    },
    {
      Word: "scare",
      Definitons: "to make someone feel frightened or worried",
    },
    {
      Word: "space",
      Definitons: "empty area with nothing in it",
    },
    {
      Word: "depress",
      Definitons:
        "to make someone feel very sad; to reduce the value of something",
    },
    {
      Word: "inspire",
      Definitons: "to make someone have the desire to do something",
    },
    {
      Word: "speaker",
      Definitons: "person who makes a speech before a group",
    },
    {
      Word: "special",
      Definitons: "different from what is usual; better or greater than normal",
    },
    {
      Word: "anger",
      Definitons: "to make someone mad, upset, or annoyed",
    },
    {
      Word: "bore",
      Definitons: "to make someone not interested in something",
    },
    {
      Word: "interest",
      Definitons: "to make someone want to know about something",
    },
    {
      Word: "specific",
      Definitons: "special or particular; clearly presented or stated",
    },
    {
      Word: "speech",
      Definitons: "expression of ideas or opinions",
    },
    {
      Word: "speed",
      Definitons: "quality of being fast or quick",
    },
    {
      Word: "include",
      Definitons: "to make someone/something part of a group",
    },
    {
      Word: "enhance",
      Definitons: "to make something better; to improve",
    },
    {
      Word: "stretch",
      Definitons: "to make something bigger or looser by pulling on it",
    },
    {
      Word: "spirit",
      Definitons:
        "part of a person that is not physical and believed to be the source of human emotions and character",
    },
    {
      Word: "cause",
      Definitons: "to make something happen; create effect or result",
    },
    {
      Word: "ban",
      Definitons: "to make something illegal or not allowed",
    },
    {
      Word: "sport",
      Definitons: "game or physical exercise with rules",
    },
    {
      Word: "spot",
      Definitons: "see someone by chance",
    },
    {
      Word: "spread",
      Definitons: "to place something over or cover a large area",
    },
    {
      Word: "spring",
      Definitons: "time of year when plants start growing after winter",
    },
    {
      Word: "bend",
      Definitons: "to make something not straight; make into a curve",
    },
    {
      Word: "seal",
      Definitons: "to make something so that it does not leak air or water",
    },
    {
      Word: "staff",
      Definitons: "employees of a company",
    },
    {
      Word: "stage",
      Definitons: "place where actors or musician perform for others",
    },
    {
      Word: "trigger",
      Definitons: "to make something start happening",
    },
    {
      Word: "strengthen",
      Definitons: "to make something stronger",
    },
    {
      Word: "confuse",
      Definitons: "to make something unclear or hard to understand",
    },
    {
      Word: "assure",
      Definitons: "to make sure that something happens",
    },
    {
      Word: "level",
      Definitons: "to make things flat or even",
    },
    {
      Word: "standard",
      Definitons: "accepted level of quality; an official measurement",
    },
    {
      Word: "star",
      Definitons: "a bright planet of gas in the night sky",
    },
    {
      Word: "constitute",
      Definitons: "to make up or be part of something",
    },
    {
      Word: "comprise",
      Definitons: "to make up or form something",
    },
    {
      Word: "pump",
      Definitons: "to make water or any other liquid move using a machine",
    },
    {
      Word: "statement",
      Definitons: "act or process of saying something formally",
    },
    {
      Word: "station",
      Definitons: "place where you can catch a train or a bus",
    },
    {
      Word: "status",
      Definitons: "position or rank relative to others in a society",
    },
    {
      Word: "create",
      Definitons: "to make, cause, or bring into existence",
    },
    {
      Word: "stain",
      Definitons: "to mark or change the color of something so it looks dirty",
    },
    {
      Word: "step",
      Definitons: "flat horizontal piece that forms stairs",
    },
    {
      Word: "stick",
      Definitons: "long thin piece of wood from a tree",
    },
    {
      Word: "greet",
      Definitons: "to meet someone with friendly words and actions; to welcome",
    },
    {
      Word: "suggest",
      Definitons: "to mention something that could be done; propose",
    },
    {
      Word: "cite",
      Definitons: "to mention the work of others in your writing",
    },
    {
      Word: "stone",
      Definitons: "hard, solid piece of rock",
    },
    {
      Word: "stir",
      Definitons:
        "to mix something by making circular movements in it with a tool",
    },
    {
      Word: "breathe",
      Definitons: "to move air into and out of your lungs",
    },
    {
      Word: "store",
      Definitons: "place where you can go to buy things",
    },
    {
      Word: "wander",
      Definitons: "to move around without purpose",
    },
    {
      Word: "leap",
      Definitons: "to move forwards often in big steps",
    },
    {
      Word: "straight",
      Definitons: "not having curves, bends, or angles",
    },
    {
      Word: "dig",
      Definitons: "to move material to create a hole",
    },
    {
      Word: "strange",
      Definitons: "unusual or odd; surprising because unexpected",
    },
    {
      Word: "fold",
      Definitons:
        "to move one part of something so that it lies on top of another part",
    },
    {
      Word: "strategy",
      Definitons: "careful plan or method for achieving a goal",
    },
    {
      Word: "put",
      Definitons: "to move or place a thing in a particular position",
    },
    {
      Word: "street",
      Definitons: "road in a city with buildings and places to walk",
    },
    {
      Word: "strength",
      Definitons: "being strong",
    },
    {
      Word: "go",
      Definitons: "to move or travel to another place",
    },
    {
      Word: "stress",
      Definitons: "to be in a state of mental tension due to problems",
    },
    {
      Word: "hurry",
      Definitons: "to move quickly",
    },
    {
      Word: "slide",
      Definitons: "to move smoothly and easily, usually over a surface",
    },
    {
      Word: "strike",
      Definitons: "to hit something",
    },
    {
      Word: "swing",
      Definitons:
        "to move smoothly backwards and forwards or from side to side while hanging from something",
    },
    {
      Word: "come",
      Definitons: "to move toward someone; go with someone",
    },
    {
      Word: "walk",
      Definitons: "to move with your legs at a slowish pace",
    },
    {
      Word: "strong",
      Definitons: "having big muscles; physically powerful",
    },
    {
      Word: "run",
      Definitons: "to move your legs faster than walking",
    },
    {
      Word: "struggle",
      Definitons: "to try very hard to do something difficult",
    },
    {
      Word: "owe",
      Definitons: "to need to pay money to a person, bank, business, etc.",
    },
    {
      Word: "rid",
      Definitons: "to no longer be wanted so you throw it away",
    },
    {
      Word: "stuff",
      Definitons: "generic description for things, materials, objects",
    },
    {
      Word: "disappoint",
      Definitons: "to not meet the expectations of others or yourself",
    },
    {
      Word: "let",
      Definitons: "to not stop someone from doing something",
    },
    {
      Word: "perceive",
      Definitons: "to notice or become aware of something",
    },
    {
      Word: "distinguish",
      Definitons:
        "to notice the difference between two or more things or people",
    },
    {
      Word: "get",
      Definitons: "to obtain, receive, or be given something",
    },
    {
      Word: "appoint",
      Definitons: "to officially choose a person for a job, position",
    },
    {
      Word: "success",
      Definitons: "achievement of a desired purpose or goal",
    },
    {
      Word: "successful",
      Definitons: "having the desired effect or result",
    },
    {
      Word: "govern",
      Definitons: "to officially control and lead an area",
    },
    {
      Word: "mount",
      Definitons: "to organize and begin an action; to attach to a support",
    },
    {
      Word: "suddenly",
      Definitons: "in an unexpected or very quick manner",
    },
    {
      Word: "suffer",
      Definitons: "to experience pain, illness, or injury",
    },
    {
      Word: "have",
      Definitons: "to own, possess, or hold something",
    },
    {
      Word: "call",
      Definitons: "to phone someone",
    },
    {
      Word: "take",
      Definitons: "to pick up something and go away with it",
    },
    {
      Word: "suggestion",
      Definitons: "idea about what someone should do",
    },
    {
      Word: "suit",
      Definitons: "to be appropriate for a given situation",
    },
    {
      Word: "situate",
      Definitons:
        "to place someone or something in a particular place or position",
    },
    {
      Word: "sum",
      Definitons: "amount when all is added together; total",
    },
    {
      Word: "click",
      Definitons: "to press a button",
    },
    {
      Word: "summer",
      Definitons: "part of the year when the weather is hot",
    },
    {
      Word: "sun",
      Definitons: "the hot shining star the earth moves around",
    },
    {
      Word: "bite",
      Definitons: "to press down on or cut into something with the teeth",
    },
    {
      Word: "restrict",
      Definitons: "to prevent from doing something",
    },
    {
      Word: "supply",
      Definitons: "to give or sell goods to others for their use",
    },
    {
      Word: "exclude",
      Definitons: "to prevent someone from access to a group",
    },
    {
      Word: "suppose",
      Definitons: "to imagine or guess what might happen",
    },
    {
      Word: "breed",
      Definitons: "to produce baby animals of specific kinds",
    },
    {
      Word: "defend",
      Definitons: "to protect against an attack",
    },
    {
      Word: "surface",
      Definitons: "of the top layer; superficial",
    },
    {
      Word: "input",
      Definitons: "to put in information, advice, or opinions",
    },
    {
      Word: "surprise",
      Definitons: "to do something that another person didn't expect",
    },
    {
      Word: "restore",
      Definitons: "to put or bring back into existence or use, mend",
    },
    {
      Word: "surround",
      Definitons: "to be on every side of something",
    },
    {
      Word: "survey",
      Definitons: "to ask people a question about a particular topic",
    },
    {
      Word: "pose",
      Definitons: "to put someone in a position to be photographed",
    },
    {
      Word: "survive",
      Definitons: "to continue to live despite illness or trouble",
    },
    {
      Word: "place",
      Definitons: "to put something in a certain location or position",
    },
    {
      Word: "bury",
      Definitons: "to put something into the ground and cover it",
    },
    {
      Word: "grab",
      Definitons: "to quickly reach out and take something in your hand.",
    },
    {
      Word: "borrow",
      Definitons: "to receive something from someone and later return it",
    },
    {
      Word: "sweep",
      Definitons: "to remove dust or dirt from a surface with a broom or brush",
    },
    {
      Word: "swim",
      Definitons: "to move through water by moving parts of the body",
    },
    {
      Word: "interpret",
      Definitons: "to repeat what was said in another language",
    },
    {
      Word: "rescue",
      Definitons: "to save something from danger or harm",
    },
    {
      Word: "remark",
      Definitons: "to say an opinion or make a comment about something",
    },
    {
      Word: "table",
      Definitons: "raised flat surface",
    },
    {
      Word: "value",
      Definitons: "to say how much money something is worth",
    },
    {
      Word: "tell",
      Definitons: "to say or communicate information to someone",
    },
    {
      Word: "joke",
      Definitons: "to say or do things that are meant to be funny",
    },
    {
      Word: "blame",
      Definitons: "to say someone is responsible for something bad",
    },
    {
      Word: "damn",
      Definitons: "to say someone should be punished for their bad behavior",
    },
    {
      Word: "declare",
      Definitons: "to say something in an official or sure way",
    },
    {
      Word: "apologize",
      Definitons: "to say sorry because of a mistake or injury you made",
    },
    {
      Word: "accuse",
      Definitons: "to say that someone has done something bad or wrong",
    },
    {
      Word: "tape",
      Definitons: "to stick things together using an adhesive strip",
    },
    {
      Word: "target",
      Definitons: "a goal or amount you are trying to achieve",
    },
    {
      Word: "task",
      Definitons: "big or small piece of work someone has to do",
    },
    {
      Word: "tax",
      Definitons: "money taken by a government from its people",
    },
    {
      Word: "taxi",
      Definitons: "car that transports people for money",
    },
    {
      Word: "tea",
      Definitons: "drink made when you put dried leaves in hot water",
    },
    {
      Word: "teach",
      Definitons: "to help someone learn or do something",
    },
    {
      Word: "teacher",
      Definitons: "person who teaches others, especially in a school",
    },
    {
      Word: "team",
      Definitons: "group of people working on a task together",
    },
    {
      Word: "technical",
      Definitons: "of practical use of machines or science in industry",
    },
    {
      Word: "technique",
      Definitons: "way of doing by using special knowledge or skill",
    },
    {
      Word: "telephone",
      Definitons: "machine used to talk to someone who is far away",
    },
    {
      Word: "criticize",
      Definitons: "to say that someone or something is bad",
    },
    {
      Word: "talk",
      Definitons: "to say things or ideas to someone with words",
    },
    {
      Word: "tend",
      Definitons: "to regularly behave in a certain way",
    },
    {
      Word: "ask",
      Definitons: "to say to someone that you want something",
    },
    {
      Word: "steal",
      Definitons: "to secretly take something that belongs to another",
    },
    {
      Word: "broadcast",
      Definitons: "to send out signals by radio or television",
    },
    {
      Word: "dismiss",
      Definitons: "to send someone away",
    },
    {
      Word: "cast",
      Definitons: "to send, throw, or move something or someone in a direction",
    },
    {
      Word: "break",
      Definitons: "to separate into pieces by force, or by dropping",
    },
    {
      Word: "install",
      Definitons: "to set up a piece of equipment so that it is ready to use",
    },
    {
      Word: "expose",
      Definitons:
        "to show something that is usually hidden, covered, or protected",
    },
    {
      Word: "lead",
      Definitons: "to show the way or guide others",
    },
    {
      Word: "slip",
      Definitons: "to slide out of position or fall to the ground by accident",
    },
    {
      Word: "text",
      Definitons: "written part of a book or other work",
    },
    {
      Word: "evolve",
      Definitons: "to slowly change or develop into something better",
    },
    {
      Word: "grin",
      Definitons: "to smile a big smile",
    },
    {
      Word: "shout",
      Definitons:
        "to speak very loudly because you want to get their attention",
    },
    {
      Word: "ruin",
      Definitons: "to spoil something, to make it useless",
    },
    {
      Word: "theater",
      Definitons: "place where shows are performed on a stage",
    },
    {
      Word: "theme",
      Definitons: "main subject to discuss or describe",
    },
    {
      Word: "themselves",
      Definitons: "reflexive form of they",
    },
    {
      Word: "implement",
      Definitons:
        "to start and carry out a plan or government policy; (n) tool",
    },
    {
      Word: "found",
      Definitons: "to start something such as a company or organization",
    },
    {
      Word: "summarize",
      Definitons: "to state the main or most important ideas of something",
    },
    {
      Word: "allege",
      Definitons: "to state without proof",
    },
    {
      Word: "therefore",
      Definitons: "for that reason",
    },
    {
      Word: "specify",
      Definitons: "to state, name, or mention exactly and clearly",
    },
    {
      Word: "float",
      Definitons: "to stay on the surface of a liquid and not sink",
    },
    {
      Word: "cancel",
      Definitons: "to stop a planned event from happening",
    },
    {
      Word: "hesitate",
      Definitons:
        "to stop before doing something because you are unsure what to do",
    },
    {
      Word: "disturb",
      Definitons: "to stop someone from working or sleeping",
    },
    {
      Word: "suspend",
      Definitons: "to stop something for a period of time; to interrupt",
    },
    {
      Word: "retire",
      Definitons: "to stop working because you have reached a certain age",
    },
    {
      Word: "threat",
      Definitons: "warning of probable trouble",
    },
    {
      Word: "threaten",
      Definitons: "to say you will harm or hurt someone",
    },
    {
      Word: "emphasize",
      Definitons: "to stress the items that are important",
    },
    {
      Word: "throughout",
      Definitons:
        "over or across an entire thing or place, or in every part of something",
    },
    {
      Word: "throw",
      Definitons: "to use your arm to make a thing fly through the air",
    },
    {
      Word: "thus",
      Definitons: "therefore; so; as a result",
    },
    {
      Word: "ticket",
      Definitons: "piece of paper that lets you enter or use something",
    },
    {
      Word: "urge",
      Definitons: "to strongly persuade someone to do something",
    },
    {
      Word: "till",
      Definitons: "until",
    },
    {
      Word: "analyze",
      Definitons: "to study carefully to find out the meaning of",
    },
    {
      Word: "win",
      Definitons: "to succeed in a game or contest",
    },
    {
      Word: "tire",
      Definitons: "lose energy and feel that you need to rest",
    },
    {
      Word: "overcome",
      Definitons: "to succeed in a struggle",
    },
    {
      Word: "title",
      Definitons: "name given to something to identify or describe it",
    },
    {
      Word: "accomplish",
      Definitons: "to succeed in doing; complete successfully",
    },
    {
      Word: "collapse",
      Definitons: "to suddenly fall down or break apart",
    },
    {
      Word: "imply",
      Definitons: "to suggest something, without saying it directly",
    },
    {
      Word: "tomorrow",
      Definitons: "day after today",
    },
    {
      Word: "advise",
      Definitons: "to suggest what should be done",
    },
    {
      Word: "tackle",
      Definitons: "to take action to solve a difficult problem",
    },
    {
      Word: "tonight",
      Definitons: "night following this day",
    },
    {
      Word: "entertain",
      Definitons: "to take care of guests by helping them enjoy their time",
    },
    {
      Word: "bring",
      Definitons: "to take or go with someone to a place",
    },
    {
      Word: "happen",
      Definitons: "to take place or occur",
    },
    {
      Word: "topic",
      Definitons: "matter people talk or write about",
    },
    {
      Word: "total",
      Definitons: "whole number or amount of something",
    },
    {
      Word: "totally",
      Definitons: "in a complete way; completely; absolutely",
    },
    {
      Word: "tough",
      Definitons: "very difficult to do or deal with",
    },
    {
      Word: "tour",
      Definitons: "a journey to visit several places for pleasure",
    },
    {
      Word: "tourist",
      Definitons: "someone who travels to a place for pleasure",
    },
    {
      Word: "strip",
      Definitons: "to take something away from (someone)",
    },
    {
      Word: "toward",
      Definitons: "facing or moving in the direction of something",
    },
    {
      Word: "bother",
      Definitons: "to take the trouble to do something",
    },
    {
      Word: "chat",
      Definitons: "to talk in a friendly and relaxed manner",
    },
    {
      Word: "whisper",
      Definitons: "to talk with breath but no voice",
    },
    {
      Word: "track",
      Definitons: "to follow behind someone to see what they are doing",
    },
    {
      Word: "trade",
      Definitons: "to buy, sell and exchange goods in business",
    },
    {
      Word: "traditional",
      Definitons: "involved in a tradition",
    },
    {
      Word: "traffic",
      Definitons: "amount of activity over a communication system",
    },
    {
      Word: "educate",
      Definitons: "to teach someone in a school or college",
    },
    {
      Word: "thank",
      Definitons: "to tell someone you are grateful to them",
    },
    {
      Word: "transfer",
      Definitons: "to move something from one place to another",
    },
    {
      Word: "aside",
      Definitons: "to the side; out of the way; for later use",
    },
    {
      Word: "consider",
      Definitons: "to think carefully about something",
    },
    {
      Word: "transport",
      Definitons: "to carry things from one place to another",
    },
    {
      Word: "believe",
      Definitons: "to think or accept that something is true",
    },
    {
      Word: "travel",
      Definitons: "to go to a place that is far away",
    },
    {
      Word: "treat",
      Definitons: "to act in a certain way toward someone",
    },
    {
      Word: "treatment",
      Definitons: "way someone acts toward another",
    },
    {
      Word: "tree",
      Definitons: "tall green plants in a forest",
    },
    {
      Word: "trend",
      Definitons: "general direction of developing, proceeding",
    },
    {
      Word: "trial",
      Definitons: "concerning or used in a trial",
    },
    {
      Word: "stroke",
      Definitons: "to touch someone or something repeatedly in a caring way",
    },
    {
      Word: "sail",
      Definitons: "to travel on water in a ship or boat",
    },
    {
      Word: "trip",
      Definitons: "journey or visit to a place",
    },
    {
      Word: "trouble",
      Definitons: "state of difficulty or stress",
    },
    {
      Word: "resist",
      Definitons: "to try to stop or prevent something",
    },
    {
      Word: "compete",
      Definitons: "to try to win something such as a race or game",
    },
    {
      Word: "trust",
      Definitons: "to be confident that someone is honest and reliable ",
    },
    {
      Word: "truth",
      Definitons: "real facts about something",
    },
    {
      Word: "spin",
      Definitons: "to turn around repeatedly",
    },
    {
      Word: "twist",
      Definitons: "to turn something in opposite directions at the same time",
    },
    {
      Word: "look",
      Definitons: "to turn your eyes in a particular direction",
    },
    {
      Word: "twice",
      Definitons: "two times",
    },
    {
      Word: "figure",
      Definitons: "to understand after thinking; work out",
    },
    {
      Word: "hold",
      Definitons: "to use hands or arms to carry or keep something",
    },
    {
      Word: "spend",
      Definitons: "to use money to pay for something",
    },
    {
      Word: "typical",
      Definitons: "normal; usual; expected",
    },
    {
      Word: "force",
      Definitons: "to use physical strength or violence to persuade",
    },
    {
      Word: "say",
      Definitons: "to use words to tell a message",
    },
    {
      Word: "speak",
      Definitons: "to use words to tell information, express thoughts",
    },
    {
      Word: "see",
      Definitons: "to use your eyes to look at something",
    },
    {
      Word: "smell",
      Definitons: "to use your nose to sense something",
    },
    {
      Word: "march",
      Definitons: "to walk with regular steps as a group ",
    },
    {
      Word: "unclear",
      Definitons: "not easy to understand; not obvious",
    },
    {
      Word: "defeat",
      Definitons: "to win against someone in something such as a fight or game",
    },
    {
      Word: "pray",
      Definitons: "to wish or hope for something to happen or be true",
    },
    {
      Word: "strain",
      Definitons:
        "too much pressure on a person or system that can cause problems",
    },
    {
      Word: "soil",
      Definitons: "top layer of earth in which plants grow",
    },
    {
      Word: "head",
      Definitons: "top part of your body with eyes and a mouth",
    },
    {
      Word: "rear",
      Definitons: "towards the back part of something",
    },
    {
      Word: "unfortunately",
      Definitons: "in a way that is to be regretted; unluckily",
    },
    {
      Word: "journey",
      Definitons: "traveling from one place to another; trip",
    },
    {
      Word: "unique",
      Definitons: "unlike other things; being the only one like it",
    },
    {
      Word: "unit",
      Definitons: "single thing or person; a part of something larger",
    },
    {
      Word: "therapy",
      Definitons:
        "treatment intended to help fix your problem or medical illness",
    },
    {
      Word: "upset",
      Definitons: "troubled, worried, or angry",
    },
    {
      Word: "van",
      Definitons: "truck with an enclosed cargo space",
    },
    {
      Word: "university",
      Definitons: "high-level educational institution; college",
    },
    {
      Word: "pipe",
      Definitons: "tube a round, hollow piece of metal, plastic, or wood",
    },
    {
      Word: "unless",
      Definitons: "negative of 'if'",
    },
    {
      Word: "twin",
      Definitons: "two children born from the same mother at the same time",
    },
    {
      Word: "ratio",
      Definitons:
        "two numbers that show ​the relationship between two groups of people or things",
    },
    {
      Word: "vice",
      Definitons: "type of evildoing",
    },
    {
      Word: "climate",
      Definitons: "typical weather conditions in a particular place",
    },
    {
      Word: "blind",
      Definitons: "unable to see; with eyes that cannot see",
    },
    {
      Word: "raw",
      Definitons: "uncooked",
    },
    {
      Word: "upon",
      Definitons: "more formal term for on",
    },
    {
      Word: "beneath",
      Definitons: "under; in or to a lower position; below",
    },
    {
      Word: "illness",
      Definitons: "unhealthy condition of the mind or body",
    },
    {
      Word: "word",
      Definitons: "unit of language that has a meaning",
    },
    {
      Word: "meter",
      Definitons: "unit of length equal to 100 cm or about 39 inches",
    },
    {
      Word: "year",
      Definitons: "unit of time equal to 12 months",
    },
    {
      Word: "useful",
      Definitons: "that can help with a particular task",
    },
    {
      Word: "usual",
      Definitons: "being the way things occur most of the time",
    },
    {
      Word: "usually",
      Definitons: "normally; regularly",
    },
    {
      Word: "minute",
      Definitons: "unit of time equal to 60 seconds",
    },
    {
      Word: "ugly",
      Definitons: "unpleasant to look at; not attractive",
    },
    {
      Word: "yet",
      Definitons: "until now; up to the present",
    },
    {
      Word: "until",
      Definitons: "up to, to indicate a point in time when something happens",
    },
    {
      Word: "could",
      Definitons: "used as the past form of can, to show possibility",
    },
    {
      Word: "but",
      Definitons: "used before you say something different, opposite",
    },
    {
      Word: "various",
      Definitons: "several; consisting of different things or types",
    },
    {
      Word: "vary",
      Definitons: "to be changeable, both up and down",
    },
    {
      Word: "ourselves",
      Definitons:
        "used by a speaker to show that they and one or more people are affected by their action",
    },
    {
      Word: "vehicle",
      Definitons: "machine (such as a car) that is used to carry things",
    },
    {
      Word: "everyday",
      Definitons: "used or seen daily; suitable for daily use; ordinary",
    },
    {
      Word: "actually",
      Definitons: "used to add new (often different) information",
    },
    {
      Word: "version",
      Definitons: "particular form of something and other forms",
    },
    {
      Word: "with",
      Definitons: "used to express that people or things are together",
    },
    {
      Word: "might",
      Definitons: "used to express that something could happen",
    },
    {
      Word: "secondly",
      Definitons: "used to give a point or reason after the first",
    },
    {
      Word: "should",
      Definitons: "used to indicate what is proper or reasonable",
    },
    {
      Word: "or",
      Definitons: "used to link alternatives, to introduce another choice",
    },
    {
      Word: "some",
      Definitons: "used to refer to a person or thing that is not known",
    },
    {
      Word: "the",
      Definitons: "used to refer to something already mentioned",
    },
    {
      Word: "video",
      Definitons: "recording capturing action with sound ",
    },
    {
      Word: "we",
      Definitons: "used to refer to the speaker and other people together",
    },
    {
      Word: "village",
      Definitons: "small town in the country",
    },
    {
      Word: "they",
      Definitons: "used to refer to two or more people, animals, or things",
    },
    {
      Word: "and",
      Definitons: "used to refer to two or more things",
    },
    {
      Word: "both",
      Definitons: "used to refer to two things at the same time",
    },
    {
      Word: "must",
      Definitons: "used to say that something is required or necessary",
    },
    {
      Word: "without",
      Definitons: "used to say you don't have something or it isn't in a place",
    },
    {
      Word: "versus",
      Definitons:
        "used to show that a thing or person is against another thing or person",
    },
    {
      Word: "visitor",
      Definitons: "one who goes to a place to see it (or someone)",
    },
    {
      Word: "for",
      Definitons: "used to show the purpose, or need of something",
    },
    {
      Word: "that",
      Definitons: "used to show which person or thing we are talking about",
    },
    {
      Word: "voice",
      Definitons: "sound made when you speak or sing",
    },
    {
      Word: "volume",
      Definitons:
        "level of sound produced by an object, such as a radio or television",
    },
    {
      Word: "may",
      Definitons: "used to talk about what is possible",
    },
    {
      Word: "than",
      Definitons: "used when comparing two things",
    },
    {
      Word: "vote",
      Definitons: "to make a choice for or against, as in an election",
    },
    {
      Word: "wait",
      Definitons: "to spend time until an expected thing happens",
    },
    {
      Word: "will",
      Definitons: "used with verbs to express the future",
    },
    {
      Word: "wall",
      Definitons: "high, flat side of a room or building",
    },
    {
      Word: "functional",
      Definitons: "useful; not just for decoration",
    },
    {
      Word: "electric",
      Definitons:
        "using a particular type of energy carried through metal wire",
    },
    {
      Word: "war",
      Definitons: "situation where armies fight each other",
    },
    {
      Word: "warm",
      Definitons: "slightly hot; not very hot",
    },
    {
      Word: "warn",
      Definitons: "to tell someone about possible danger",
    },
    {
      Word: "wash",
      Definitons: "to clean someone or something with soap and water",
    },
    {
      Word: "waste",
      Definitons: "to use valuable things ineffectively",
    },
    {
      Word: "digital",
      Definitons: "using electronic signals or computers",
    },
    {
      Word: "wave",
      Definitons: "to move your hand or arm to say hello or goodbye",
    },
    {
      Word: "experimental",
      Definitons: "using techniques that are different or untried before",
    },
    {
      Word: "train",
      Definitons: "vehicle that carries people and runs on rails",
    },
    {
      Word: "really",
      Definitons: "very",
    },
    {
      Word: "precise",
      Definitons: "very accurate and exact expression or detail",
    },
    {
      Word: "mad",
      Definitons: "very angry, very strong feelings, crazy",
    },
    {
      Word: "terrible",
      Definitons: "very bad; horrible",
    },
    {
      Word: "weapon",
      Definitons: "something that is used for fighting",
    },
    {
      Word: "awful",
      Definitons: "very bad; horrible; terrible",
    },
    {
      Word: "severe",
      Definitons: "very bad; very serious",
    },
    {
      Word: "weekend",
      Definitons: "Saturday and Sunday",
    },
    {
      Word: "massive",
      Definitons: "very big; very large and heavy",
    },
    {
      Word: "fantastic",
      Definitons: "very fanciful in design, construction, or appearance",
    },
    {
      Word: "weight",
      Definitons: "how heavy something is",
    },
    {
      Word: "great",
      Definitons: "very good; fantastic; wonderful",
    },
    {
      Word: "welcome",
      Definitons: "friendly greeting to someone who has arrived",
    },
    {
      Word: "extreme",
      Definitons: "very great in degree",
    },
    {
      Word: "greatly",
      Definitons: "very much",
    },
    {
      Word: "radical",
      Definitons: "very new and different from what is traditional",
    },
    {
      Word: "ancient",
      Definitons: "very old; having lived a very long time ago",
    },
    {
      Word: "newly",
      Definitons: "very recently; just done or made",
    },
    {
      Word: "whatever",
      Definitons: "anything or everything needed; no matter what",
    },
    {
      Word: "moment",
      Definitons: "very short or brief period of time",
    },
    {
      Word: "parallel",
      Definitons: "very similar and often occurring at the same time",
    },
    {
      Word: "slight",
      Definitons: "very small in degree or amount",
    },
    {
      Word: "whereas",
      Definitons: "taking into consideration the fact that",
    },
    {
      Word: "steel",
      Definitons:
        "very strong metal made of iron and other substances mixed together",
    },
    {
      Word: "intense",
      Definitons: "very strong, great, or extreme in degree",
    },
    {
      Word: "horrible",
      Definitons: "very unpleasant",
    },
    {
      Word: "tiny",
      Definitons: "very, very small",
    },
    {
      Word: "quite",
      Definitons: "very; in a complete or total manner",
    },
    {
      Word: "white",
      Definitons: "lightest color; the color of fresh snow and milk",
    },
    {
      Word: "form",
      Definitons: "visible shape or style; type; kind",
    },
    {
      Word: "curious",
      Definitons: "wanting to know more about something",
    },
    {
      Word: "competitive",
      Definitons: "wanting to win or to be better than others",
    },
    {
      Word: "wide",
      Definitons: "having a great distance from one side to the other",
    },
    {
      Word: "sound",
      Definitons: "waves traveling in air or water that can be heard ",
    },
    {
      Word: "wife",
      Definitons: "married woman",
    },
    {
      Word: "wild",
      Definitons: "living in nature; not tame",
    },
    {
      Word: "mode",
      Definitons: "way of acting or doing something",
    },
    {
      Word: "yes",
      Definitons: "way to say you agree or will do something",
    },
    {
      Word: "wind",
      Definitons: "natural movement of outside air as part of the weather",
    },
    {
      Word: "window",
      Definitons: "opening in a wall or door to let in light",
    },
    {
      Word: "wine",
      Definitons: "alcoholic drink made from the juice of grapes",
    },
    {
      Word: "custom",
      Definitons: "what is usual or normal",
    },
    {
      Word: "winter",
      Definitons: "coldest season of the year",
    },
    {
      Word: "who",
      Definitons: "what or which person or people, to ask about, talking about",
    },
    {
      Word: "food",
      Definitons: "what people and animals eat to live",
    },
    {
      Word: "name",
      Definitons: "what something or someone is called",
    },
    {
      Word: "wish",
      Definitons: "to want something to happen or to become true",
    },
    {
      Word: "probability",
      Definitons: "what the chances are that something will happen",
    },
    {
      Word: "hello",
      Definitons: "what you say when you meet someone",
    },
    {
      Word: "hi",
      Definitons: "what you say when you meet someone; hello",
    },
    {
      Word: "excitement",
      Definitons: "when people feel very happy and enthusiastic",
    },
    {
      Word: "wonder",
      Definitons: "surprise caused by experiencing something amazing",
    },
    {
      Word: "wonderful",
      Definitons: "producing feelings of enjoyment or delight",
    },
    {
      Word: "invitation",
      Definitons: "when someone asks you to do something or go somewhere",
    },
    {
      Word: "pregnant",
      Definitons: "when women carry a child inside them that is not yet born",
    },
    {
      Word: "youth",
      Definitons: "when you are young; a young person",
    },
    {
      Word: "worker",
      Definitons: "person who works",
    },
    {
      Word: "pride",
      Definitons: "when you respect yourself",
    },
    {
      Word: "worry",
      Definitons: "to feel concerned or troubled about something",
    },
    {
      Word: "worth",
      Definitons: "how much something is worth; the value of something",
    },
    {
      Word: "hope",
      Definitons: "when you wish something would happen; what you wish",
    },
    {
      Word: "boundary",
      Definitons: "where one area ends and another begins",
    },
    {
      Word: "wrong",
      Definitons: "not right, incorrect; not true; bad",
    },
    {
      Word: "rice",
      Definitons: "white or brown grains from a plant used for food",
    },
    {
      Word: "yeah",
      Definitons: "yes (informal)",
    },
    {
      Word: "sugar",
      Definitons: "white sweet substance used to make foods sweeter",
    },
    {
      Word: "determination",
      Definitons: "will to achieve a goal despite difficulties",
    },
    {
      Word: "cable",
      Definitons: "wire carrying electricity, tv signals, internet, etc.",
    },
    {
      Word: "yesterday",
      Definitons: "day before today",
    },
    {
      Word: "surely",
      Definitons: "with certainty; definitely",
    },
    {
      Word: "rapidly",
      Definitons: "with great speed",
    },
    {
      Word: "regardless",
      Definitons:
        "without being affected or concerned by something difficult or troubling",
    },
    {
      Word: "not",
      Definitons: "word indicating the negative of verbs, adjectives, etc.",
    },
    {
      Word: "yourself",
      Definitons: "reflexive form of 'you', used for an emphasis",
    },
    {
      Word: "verb",
      Definitons: "word that expresses an action or state",
    },
    {
      Word: "when",
      Definitons: "word you use to ask about the time or day",
    },
    {
      Word: "where",
      Definitons: "word you use to ask the location of something",
    },
    {
      Word: "candidate",
      Definitons: "a person being considered for a job or position in office",
    },
    {
      Word: "language",
      Definitons: "words or signs used to communicate messages",
    },
    {
      Word: "conference",
      Definitons: "an event where people exchange ideas",
    },
    {
      Word: "efficiency",
      Definitons: "working well; producing something without waste",
    },
    {
      Word: "partnership",
      Definitons: "working with others for some purpose",
    },
    {
      Word: "valuable",
      Definitons: "worth a lot of money",
    },
    {
      Word: "criticism",
      Definitons:
        "written or spoken remarks about what is bad about someone or something",
    },
    {
      Word: "own",
      Definitons: "yours, his, hers, etc.; not belonging to another",
    },
  ];

  let wordsWithDefinitionOrdered = []
  //for (let i = 0; i < 10; i++) {
   // words.push({
//correct: null,
   //   word: newWordArray[i],
   // });
  //}

  for(let i = 0; i < newWordArray.lengthl; i++){
    let targetWord = newWordArray[i]
    
    for(let i = 0; i < newWordArray.lengthl; i++){
      if(wordsWithDefinitions[i].word === targetWord){
        	wordsWithDefinitionOrdered.push(wordsWithDefinitions[i])
          console.log(wordsWithDefinitions[i])
      }
    }
  }
  console.log(wordsWithDefinitionOrdered)
}

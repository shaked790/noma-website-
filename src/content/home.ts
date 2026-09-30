import studioPortrait from '@/assets/studio-portrait.png'
import principleLife from '@/assets/principle-life.png'
import principlePlan from '@/assets/principle-plan.png'
import principleMaterial from '@/assets/principle-material.png'
import principleTime from '@/assets/principle-time.png'
import { getProjectBySlug } from '@/content/projects'

export type HeroSlide = {
  src: string
  alt: string
  width: number
  height: number
}

function heroSlide(slug: string): HeroSlide {
  const project = getProjectBySlug(slug)
  if (!project) throw new Error(`Missing project: ${slug}`)
  return project.heroImage
}

/*
 * Homepage content. The Hero reads everything it renders from here, so replacing
 * the photograph or the copy never touches the component's layout.
 *
 * Background stills come from each project's heroImage, looked up by slug so
 * array order in projects.ts cannot swap the sequence.
 */
export const hero = {
  eyebrow: 'בתים שמתחברים לאנשים',
  headline: 'עיצוב שמתחיל\nבאיך אתם חיים.',
  supporting:
    'תכנון ועיצוב פנים לדירות ובתים פרטיים, עם ליווי מלא מהרעיון ועד הפרט האחרון.',
  secondaryCta: {
    label: 'לצפייה בפרויקטים',
    href: '#projects',
  },
  aside: ['HOMES', 'PEOPLE', 'BALANCE', 'ALWAYS'],
  scrollCue: 'גללו למטה',
  slides: [
    heroSlide('beit-herzliya'),
    heroSlide('dira-tel-aviv'),
    heroSlide('beit-caesarea'),
  ] as const satisfies readonly HeroSlide[],
}

/*
 * Studio section. Copy and photographs live here so the layout stays presentational.
 * Portrait and principle stills are generated placeholders, not a NOMA project.
 */
export const studio = {
  eyebrow: 'הסטודיו',
  headline: 'עיצוב שמתחיל\nבאנשים.',
  body: 'ב־NOMA אנחנו מאמינים שעיצוב טוב מתחיל בהקשבה — לא רק לשטח, אלא לאורח החיים שלכם. אנחנו מלווים אתכם בתהליך של תכנון, בחירת חומרים, פרטים ותיאום, כדי ליצור בית שמרגיש נכון — היום וגם בעוד שנים.',
  cta: {
    label: 'עוד על הסטודיו',
    href: '#studio',
  },
  quote: 'בית טוב הוא לא תוצאה של סגנון, אלא של הבנה עמוקה של איך אנשים חיים.',
  attribution: {
    name: 'אורי נעים',
    role: 'מייסד ומעצב ראשי',
  },
  portrait: {
    src: studioPortrait,
    width: 1200,
    height: 1500,
    alt: 'מעצב יושב ליד שולחן עץ ומשרטט תוכניות, בסטודיו מואר עם קירות בטון.',
  },
  principles: [
    {
      title: 'מתחילים מהחיים שלכם',
      description: 'מקשיבים, מבינים, ומתכננים את הבית סביבכם.',
      image: {
        src: principleLife,
        alt: 'סלון מואר עם ספת פשתן.',
      },
    },
    {
      title: 'תכנון לפני קישוט',
      description: 'פתרונות חכמים לפני בחירת חומרים.',
      image: {
        src: principlePlan,
        alt: 'חדר שינה שקט עם מצעי פשתן.',
      },
    },
    {
      title: 'חומרים עם ערך',
      description: 'בחירה מדויקת ואיכותית, לא רק טרנדית.',
      image: {
        src: principleMaterial,
        alt: 'ספת פשתן ושולחן עץ בחלל שקט.',
      },
    },
    {
      title: 'בית שגם בעוד עשר שנים',
      description: 'עיצוב שנשאר נכון לאורך זמן — וגם עם החיים.',
      image: {
        src: principleTime,
        alt: 'פינת פנים עם כד וצמח.',
      },
    },
  ],
}

/*
 * About-studio modal. Separate from the homepage studio block so the page
 * stays short; the portrait reuses the existing studio still.
 */
export const studioAbout = {
  studioEyebrow: 'על NOMA',
  studioHeading: 'עיצוב שמתחיל באנשים.',
  studioBody: [
    'NOMA הוא סטודיו בוטיק לעיצוב פנים שהוקם מתוך אמונה שבית טוב לא צריך רק להיראות נכון — הוא צריך להרגיש נכון.',
    'אנחנו מתחילים מהחיים שמתקיימים בתוך החלל: מההרגלים, מהצרכים, מהאור שנכנס בבוקר ומהרגעים הקטנים שחוזרים על עצמם בכל יום.',
    'משם אנחנו בונים את העיצוב — מהתכנון והפרופורציות, דרך החומרים והתאורה ועד לפרטים האחרונים.',
    'המטרה היא לא ליצור בית שנראה כמו תמונה מקטלוג, אלא מקום שיש בו אופי, שקט וחיבור אמיתי למי שחי בו.',
  ],
  founderEyebrow: 'על אורי',
  founderHeading: 'יוצר יותר מחללים, אנשים.',
  founderBody: [
    'אורי נעים הוא מעצב פנים ומייסד NOMA.',
    'אורי מאמין שעיצוב טוב מתחיל הרבה לפני שבוחרים צבע, ספה או גוף תאורה.',
    'עבורו, תהליך העיצוב הוא קודם כל תהליך של הקשבה — להבין איך אנשים חיים, מה חשוב להם, מה חסר להם בחלל ומה הם רוצים להרגיש כשהם נכנסים הביתה.',
    'הגישה שלו משלבת חשיבה אדריכלית עם רגישות לחומרים, לאור ולפרטים הקטנים.',
    'הוא אוהב חללים מדויקים ומינימליסטיים, אבל לא כאלה שמרגישים קרים — אלא כאלה שיש בהם חומריות, חמימות ואופי.',
    'בכל פרויקט אורי מלווה את התהליך מהרעיון הראשוני ועד לפרטים האחרונים, מתוך מטרה ליצור בית שהוא לא רק יפה יותר, אלא נכון יותר עבור האנשים שחיים בו.',
  ],
  quote: 'אני לא מעצב בתים כדי שיראו טוב בתמונה.\nאני מעצב אותם כדי שירגישו טוב בחיים.',
  attribution: {
    name: 'אורי נעים',
    role: 'מייסד ומעצב ראשי, NOMA',
  },
  approachEyebrow: 'גישת העבודה שלנו',
  principles: [
    {
      title: 'הקשבה לפני עיצוב',
      description: 'כל פרויקט מתחיל בהבנה אמיתית של האנשים שחיים בו.',
      icon: 'listen',
    },
    {
      title: 'חומריות לפני טרנדים',
      description: 'בחירה בחומרים איכותיים, טבעיים ועל־זמניים.',
      icon: 'material',
    },
    {
      title: 'דיוק בפרטים',
      description: 'הפרטים הקטנים הם אלה שיוצרים את ההבדל הגדול.',
      icon: 'detail',
    },
    {
      title: 'הבית קודם לאסתטיקה',
      description: 'העיצוב צריך לשרת את החיים — לא להפך.',
      icon: 'home',
    },
  ],
  cta: {
    label: 'בואו נדבר על הפרויקט שלכם',
    href: '#contact',
  },
  closeLabel: 'סגירה',
  portrait: {
    src: studioPortrait,
    width: 1200,
    height: 1500,
    alt: 'אורי נעים, מייסד NOMA, יושב ליד שולחן עץ ומשרטט תוכניות.',
  },
} as const

/*
 * Process section. Copy lives here so the layout stays presentational.
 * The still is an existing studio placeholder — a vessel and olive, not a new asset.
 */
export const process = {
  eyebrow: 'איך אנחנו עובדים',
  headline: 'תהליך שמוביל לתוצאה מדויקת.',
  body: 'אנחנו מאמינים בתהליך עבודה ברור ושקוף, שמאפשר לנו להכיר לעומק את הצרכים שלכם וליצור חללים שמרגישים נכון — גם היום וגם בעתיד.',
  cta: {
    label: 'להכיר את התהליך',
    href: '#contact',
  },
  aside: ['SPACES', 'THAT', 'BELONG'],
  image: {
    src: principleTime,
    width: 640,
    height: 640,
    alt: 'כד אבן בהיר עם עץ זית ליד קיר שקט.',
  },
  steps: [
    {
      number: '01',
      title: 'פגישת היכרות',
      description:
        'אנחנו מקשיבים, לומדים ומבינים את הצרכים, הסגנון והחלומות שלכם.',
      icon: 'listen',
    },
    {
      number: '02',
      title: 'תכנון קונספט',
      description:
        'מפתחים קונספט עיצובי מותאם אישית, עם חשיבה על פונקציונליות, חומרים ואור.',
      icon: 'concept',
    },
    {
      number: '03',
      title: 'תכנון וביצוע',
      description:
        'מלווים אתכם לאורך כל הדרך, בתיאום עם אנשי מקצוע ובקפדנות על כל פרט.',
      icon: 'build',
    },
    {
      number: '04',
      title: 'חלל שמרגיש שלכם',
      description: 'התוצאה היא חלל מדויק ומזמין — כזה שאתם אוהבים לחיות בו.',
      icon: 'home',
    },
  ],
} as const

/*
 * Contact / lead-qualification section. Contact values stay in navigation.ts.
 */
export const contact = {
  eyebrow: 'צור קשר',
  headline: 'בואו נדבר על הפרויקט שלכם.',
  body: 'ספרו לנו על הבית ועל איך אתם חיים בו. אנחנו מקשיבים, מבינים את הצרכים, ובודקים יחד איך אפשר ליצור חלל שמרגיש נכון עבורכם.',
  submitLabel: 'בואו נדבר על הפרויקט',
  whatsappLabel: 'או כתבו לנו ב-WhatsApp',
  whatsappMessage:
    'שלום אורי, הגעתי לאתר של NOMA ואשמח לשמוע על תהליך עיצוב פנים עבור הפרויקט שלי.',
  note: 'אפשר לכתוב כאן או לפנות בוואטסאפ — בלי התחייבות.',
  fields: {
    name: { id: 'lead-name', name: 'name', label: 'שם מלא', autoComplete: 'name' },
    phone: { id: 'lead-phone', name: 'phone', label: 'טלפון', autoComplete: 'tel' },
    email: {
      id: 'lead-email',
      name: 'email',
      label: 'אימייל',
      autoComplete: 'email',
    },
    city: {
      id: 'lead-city',
      name: 'city',
      label: 'עיר / אזור',
      autoComplete: 'address-level2',
    },
    projectType: {
      id: 'lead-project-type',
      name: 'projectType',
      label: 'סוג הפרויקט',
      placeholder: 'בחרו את סוג הפרויקט',
    },
    stage: {
      id: 'lead-stage',
      name: 'stage',
      label: 'שלב נוכחי',
      placeholder: 'בחרו את השלב שבו אתם נמצאים',
    },
    message: {
      id: 'lead-message',
      name: 'message',
      label: 'ספרו לנו קצת על הפרויקט',
      placeholder: 'מה אתם מחפשים בחלל, ומה חשוב לכם בתהליך?',
      maxLength: 500,
    },
  },
  projectTypes: [
    { value: 'apartment', label: 'דירה' },
    { value: 'house', label: 'בית פרטי' },
    { value: 'renovation', label: 'שיפוץ' },
    { value: 'existing', label: 'עיצוב חלל קיים' },
    { value: 'other', label: 'אחר' },
  ],
  stages: [
    { value: 'before-purchase', label: 'לפני רכישה' },
    { value: 'planning', label: 'בתהליך תכנון' },
    { value: 'before-renovation', label: 'לפני שיפוץ' },
    { value: 'during-renovation', label: 'במהלך שיפוץ' },
    { value: 'other', label: 'בשלב אחר' },
  ],
  requiredMark: '*',
  errors: {
    required: 'שדה חובה',
    email: 'כתובת אימייל לא תקינה',
  },
} as const

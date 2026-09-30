import herzliya from '@/assets/project-herzliya.png'
import telAviv from '@/assets/project-telaviv.png'
import caesarea from '@/assets/project-caesarea.png'
import herzWideKitchen from '@/assets/projects/beit-herzliya/herzliya-wide-kitchen.png'
import herzPairLiving from '@/assets/projects/beit-herzliya/herzliya-pair-living.png'
import herzPairIsland from '@/assets/projects/beit-herzliya/herzliya-pair-island.png'
import herzDetail from '@/assets/projects/beit-herzliya/herzliya-detail-material.png'
import herzResult from '@/assets/projects/beit-herzliya/herzliya-result.png'
import taOffset from '@/assets/projects/dira-tel-aviv/telaviv-offset.png'
import taPairKitchen from '@/assets/projects/dira-tel-aviv/telaviv-pair-kitchen.png'
import taPairBedroom from '@/assets/projects/dira-tel-aviv/telaviv-pair-bedroom.png'
import taDetail from '@/assets/projects/dira-tel-aviv/telaviv-detail.png'
import taResult from '@/assets/projects/dira-tel-aviv/telaviv-result.png'
import caeWide from '@/assets/projects/beit-caesarea/caesarea-wide.png'
import caePairPool from '@/assets/projects/beit-caesarea/caesarea-pair-pool.png'
import caePairInterior from '@/assets/projects/beit-caesarea/caesarea-pair-interior.png'
import caeDetail from '@/assets/projects/beit-caesarea/caesarea-detail.png'
import caeResult from '@/assets/projects/beit-caesarea/caesarea-result.png'

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type ProjectGallery = {
  wide: ProjectImage
  pair: [ProjectImage, ProjectImage]
  detail: ProjectImage
  closing: ProjectImage
}

export type Project = {
  slug: string
  title: string
  location: string
  type: string
  year: string
  shortDescription: string
  challenge: string
  concept: string
  materials: string[]
  result: string
  heroImage: ProjectImage
  gallery: ProjectGallery
}

function img(
  src: string,
  alt: string,
  width: number,
  height: number,
): ProjectImage {
  return { src, alt, width, height }
}

/*
 * DEMO PROJECTS — placeholder interiors, not NOMA client work.
 * Replace the photographs, alt text and copy when real case studies are ready.
 */
export const projects: Project[] = [
  {
    slug: 'beit-herzliya',
    title: 'בית בהרצליה',
    location: 'הרצליה',
    type: 'בית פרטי',
    year: '2024',
    shortDescription:
      'יצירת בית חם ומדויק שמחבר בין אדריכלות מינימליסטית לחומריות טבעית.',
    challenge:
      'בית חדש עם מעטפת נקייה, שביקש עומק וחום בלי לאבד את השקט האדריכלי.',
    concept:
      'חומרים טבעיים בשכבות עדינות — עץ, אבן ואור — כדי שהחללים יישארו פתוחים ועדיין ירגישו מיושבים.',
    materials: ['אלון מעושן', 'שיש בהיר', 'פליז מוברש', 'פשתן'],
    result: 'בית שמרגיש מדויק ביום־יום, ונותן לחומר ולאור לעשות את העבודה.',
    heroImage: img(
      herzliya,
      'פינת אוכל ומטבח בבית בהרצליה: שולחן עץ, אי שיש ותאורה תלויה.',
      1920,
      1080,
    ),
    gallery: {
      wide: img(
        herzWideKitchen,
        'חלל האוכל והמטבח בבית בהרצליה, מבט רחב אל האי והשולחן.',
        1920,
        1080,
      ),
      pair: [
        img(
          herzPairLiving,
          'סלון בבית בהרצליה: ספת פשתן, שולחן נמוך ואור יום.',
          1600,
          1200,
        ),
        img(
          herzPairIsland,
          'פרט מטבח: אי שיש בהיר מול חיפוי עץ.',
          1600,
          1200,
        ),
      ],
      detail: img(
        herzDetail,
        'פרט חומר: מפגש בין שיש בהיר, עץ מעושן ופליז.',
        1600,
        1200,
      ),
      closing: img(
        herzResult,
        'החלל המוגמר בבית בהרצליה: אוכל, מטבח ואור מאוחר.',
        1920,
        1080,
      ),
    },
  },
  {
    slug: 'dira-tel-aviv',
    title: 'דירה בתל אביב',
    location: 'תל אביב',
    type: 'דירה',
    year: '2023',
    shortDescription: 'מרחב עירוני רגוע שמאזן בין חומר, אור ופונקציונליות.',
    challenge:
      'דירת קבלן עם תכנון גנרי, שביקשה להפוך למרחב רגוע בלי לאבד אור ופונקציה.',
    concept:
      'צמצום מחיצות, הארכת קו הראייה אל הנוף, וחומרים בהירים שמחזיקים את האור לאורך היום.',
    materials: ['טיח מינרלי', 'עץ אלון', 'וילונות פשתן', 'אבן טבעית'],
    result: 'דירה עירונית שנשימתה ארוכה יותר — שקטה, שימושית ומחוברת לנוף.',
    heroImage: img(
      telAviv,
      'סלון בדירה בתל אביב: ספה בהירה, חלונות גבוהים ונוף עירוני.',
      1920,
      1080,
    ),
    gallery: {
      wide: img(
        taOffset,
        'סלון הדירה בתל אביב מול חלון הנוף.',
        1200,
        1600,
      ),
      pair: [
        img(
          taPairKitchen,
          'מטבח בהיר בדירה בתל אביב, מול אור העיר.',
          1600,
          1200,
        ),
        img(
          taPairBedroom,
          'חדר שינה שקט בדירה בתל אביב, מצעים ופשתן.',
          1600,
          1200,
        ),
      ],
      detail: img(
        taDetail,
        'פרט חומר בדירה בתל אביב: אלון, פשתן ואבן בהירה.',
        1600,
        1200,
      ),
      closing: img(
        taResult,
        'הסלון המוגמר בדירה בתל אביב, מול הנוף באור מאוחר.',
        1920,
        1080,
      ),
    },
  },
  {
    slug: 'beit-caesarea',
    title: 'בית בקיסריה',
    location: 'קיסריה',
    type: 'בית פרטי',
    year: '2024',
    shortDescription: 'בית משפחתי שמחבר בין סביבת החוץ לבין חללי הפנים.',
    challenge:
      'מגרש עם חצר וברכה, שבו הפנים והחוץ חיו כשני עולמות נפרדים.',
    concept:
      'רצף חומרי אחד — אבן, עץ ומים — שממשיך מהסלון אל החצר בלי סף מיותר.',
    materials: ['אבן גיר', 'עץ טיק', 'טיח בהיר', 'ברזל שחור'],
    result: 'בית שחי עם החצר: הברכה, העץ והצל הם חלק מתוכנית החללים.',
    heroImage: img(
      caesarea,
      'חצר וברכה בבית בקיסריה: קיר אבן, עץ זית ופרגולה מעץ.',
      1920,
      1080,
    ),
    gallery: {
      wide: img(
        caeWide,
        'חצר וברכה בבית בקיסריה, מבט רחב אל הקיר והעץ.',
        1920,
        1080,
      ),
      pair: [
        img(
          caePairPool,
          'הברכה בבית בקיסריה, השתקפות העץ במים.',
          1600,
          1200,
        ),
        img(
          caePairInterior,
          'פנים הבית בקיסריה נפתח אל החצר והברכה.',
          1600,
          1200,
        ),
      ],
      detail: img(
        caeDetail,
        'פרט חומר: אבן גיר, עץ טיק ומסגרת ברזל.',
        1600,
        1200,
      ),
      closing: img(
        caeResult,
        'החצר המוגמרת בבית בקיסריה באור מאוחר.',
        1920,
        1080,
      ),
    },
  },
]

export const featuredProjectsIntro = {
  heading: 'פרויקטים נבחרים',
  allLabel: 'לכל הפרויקטים',
  allHref: '/projects',
  slides: ['01', '02', '03'] as const,
  currentSlide: 2,
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return undefined
  return projects[(index + 1) % projects.length]
}

export function projectPath(slug: string): string {
  return `/projects/${slug}`
}

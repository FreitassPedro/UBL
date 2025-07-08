export interface Video {
  id: string
  title: string
  videoId: string
  completed: boolean
}

export interface Professor {
  name: string
  bio: string
  imageUrl: string
}

export interface Course {
  id: string
  title: string
  description: string
  professor: Professor
  videos: Video[]
}


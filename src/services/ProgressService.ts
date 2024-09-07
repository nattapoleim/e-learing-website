export class ProgressService {
   static saveProgress(userId: number, courseId: number, progress: number): void {
      const progressKey = `progress_${userId}_${courseId}`
      localStorage.setItem(progressKey, JSON.stringify(progress))
   }

   static loadProgress(userId: number, courseId: number): number | null {
      const progresskey = `progress_${userId}_${courseId}`
      const progressData = localStorage.getItem(progresskey)
      return progressData ? JSON.parse(progressData) : null
   }

   static clearProgress(userId: number, courseId: number): void {
      const progressKey = `progress_${userId}_${courseId}`
      localStorage.removeItem(progressKey)
   }
}


export interface Task {
    title: string
    description: string
    budget: Budget
    platforms: Array<string>
    filesIds: Array<string>
  }

export interface Budget {
    value: number
    currency: string
}
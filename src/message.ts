import path from 'path'

class LogMessage {
  private readonly message: string
  private readonly data: any
  private readonly sourceFile: string
  private readonly lineNumber: number

  constructor(message: string, data?: any) {
    this.message = message
    this.data = data
    this.sourceFile = 'Unknown'
    this.lineNumber = -1
  }

  public toString(): string {
    const output = {
      sourceFile: this.sourceFile,
      lineNumber: this.lineNumber,
      message: this.message,
      ...(this.data && {
        data: this.data,
      }),
    }

    return JSON.stringify(output, null, 2)
  }
}

export default LogMessage

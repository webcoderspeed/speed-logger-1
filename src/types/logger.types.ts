import { LogLevel } from '@nestjs/common'
import { DestinationStream, LoggerOptions } from 'pino'

export interface ILogger {
  info(message: string, data?: unknown): void
  warn(message: string, data?: unknown): void
  error(message: string, data?: unknown): void
  fatal(message: string, data?: unknown): void
}

export enum LoggerType {
  WINSTON = 'winston',
  PINO = 'pino',
}

type IPinoConfiguration = {
  type: LoggerType.PINO
  options?: LoggerOptions<LogLevel> | DestinationStream
}

export type ILoggerOptions = IPinoConfiguration

export interface TestItem {
  question: string;               /* вопрос */
  answers: Array<string>;         /* список ответов */
  answesrQty?: number;            /* количество ответов */
  correctAnswerNumber?: number;   /* номер правильного ответа */
  // todo разработать такую процедуру
  status?: boolean;                /*устанавливается в процедуре интеллектуальной проверки*/
  statusLevel?:number;             /* статус ошибки: критичная, некоритичная и т.д. */
  statusMessage?: string;          /* сообщение проверки*/
}

export interface Config {
  answersNumber?: number;
  semanticCheck?: boolean;
}

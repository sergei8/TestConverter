export interface TestItem {
  question: string;               /* вопрос */
  answers: Array<string>;         /* список ответов */
  answesrQty?: number;            /* количество ответов */
  correctAnswerNumber?: number;   /* номер правильного ответа */
  // todo разработать такую процедуру
  status?: boolean;                /*устанавливается в процедуре интеллектуальной проверки*/
  statusMessage?: string;          /* сообщение проверки*/
}

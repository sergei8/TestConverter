export interface TestItem {
  question: string;               /* вопрос */
  answers: Array<string>;         /* список ответов */
  answesrQty?: number;            /* количество ответов */
  correctAnswerNumber?: number;   /* номер правильного ответа */
  status?: string;                /* */
}

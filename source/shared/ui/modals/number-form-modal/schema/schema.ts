import { z } from 'zod/v4'

export const numberFormSchema = z.object({
  phone: z
    .string()
    .refine(
      val => {
        // Убираем все нечисловые символы
        const digits = val.replace(/\D/g, '')
        // Проверяем, что осталось 11 цифр (7 + код + номер)
        return digits.length === 11
      },
      { message: 'Номер телефона должен состоять из 10 цифр' }
    )
    .nonempty('Укажите номер телефона')
    .regex(
      /^(8|\+7)\s?\(?([345689]\d{2})\)?/,
      'Проверьте код оператора или региона — он может начинаться на 3, 4, 5, 6, 8, 9'
    )
})

import { object, string, number, date} from 'yup';

const contactSchema = object({
  firstName: string().required("Bu Alan Zorunludur"),
  lastName: string().required("Bu Alan Zorunludur"),
  email: string().email("Geçerli Bir Mail Adresi Giriniz").required("Bu Alan Zorunludur"),
  message: string().min(5, "En az 5 karakter Uzunluğunda Olmalı").required("Bu Alan Zorunludur"),
});

export default contactSchema;
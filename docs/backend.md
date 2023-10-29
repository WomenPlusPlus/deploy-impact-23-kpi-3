## Main libraries

### [NestJs](https://docs.nestjs.com/)
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

### [Supabase-js](https://github.com/supabase/supabase-js)
First of all, you need to install the library:

```yarn install @supabase/supabase-js```

Then you're able to import the library and establish the connection with the database:
```
import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
```
import { login } from '@/actions';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Login - Movie App',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-2xl font-semibold text-gray-700">Mock Login</h1>

      <form action={login}>
        <Button type="submit" size="lg" className="text-lg">
          Login
        </Button>
      </form>
    </div>
  );
}

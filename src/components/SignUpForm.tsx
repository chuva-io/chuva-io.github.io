import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/api";
import { Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const SignUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "The passwords do not match",
    path: ["confirm_password"],
  });

export default function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate({ to: "/dashboard" });
    },
    onError: (error: any) => {
      alert(error.message || "Registration failed");
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: ({ value }) => mutation.mutate(value),
    validators: {
      onChange: SignUpSchema,
      onMount: SignUpSchema,
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <form.Field
                  name="email"
                  children={(field) => (
                    <div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="c.evora@chuva.io"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        required
                      />
                      {field.state.meta.isTouched &&
                        field.state.meta.errors && (
                          <p className="text-red-500 text-sm">
                            {field.state.meta.errors &&
                              field.state.meta.errors[0]?.message}
                          </p>
                        )}
                    </div>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <form.Field
                  name="password"
                  children={(field) => (
                    <div>
                      <Input
                        id="password"
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        required
                      />
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm">
                          {field.state.meta.isTouched &&
                            field.state.meta.errors &&
                            field.state.meta.errors[0]?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <form.Field
                  name="confirm_password"
                  children={(field) => (
                    <div>
                      <Input
                        id="confirm_password"
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        required
                      />
                      {field.state.meta.isTouched &&
                        field.state.meta.errors && (
                          <p className="text-red-500 text-sm">
                            {field.state.meta.errors &&
                              field.state.meta.errors[0]?.message}
                          </p>
                        )}
                    </div>
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <form.Subscribe
                  selector={(state) => [state.canSubmit]}
                  children={([canSubmit]) => (
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!canSubmit || mutation.isPending}
                    >
                      {mutation.isPending ? "Signing up..." : "Sign Up"}
                    </Button>
                  )}
                />
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

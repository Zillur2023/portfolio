"use client";
import { BottomGradient, Label, LabelInputContainer } from "./form/Label";
import { Input } from "./form/Input";
import { Textarea } from "./form/Textarea";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import Form from "./form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactValidationSchema from "@/schemas/contact.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateContact, useGetContacts } from "@/hooks/contact.hooks";
import { LoadingContact } from "./ui/Loading";
import { IContact } from "@/models/contact";
import { IExtendedIUser } from "@/lib/UserProvider";


export function Contact({user}:{user?: IExtendedIUser | null}) {
  const { data, isPending } = useGetContacts()

  const features = [
    {
      title: "",
      description:
        "",
      skeleton: <ContactForm />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800 ",
    },
    {
      title: "",
      description:
        "",
      skeleton: <Skeleton />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none hidden md:block",
    },
  ];
 
  return (
    <div>
      <h1 className="heading ">Contact me</h1>
      
   {
    user ? <>
    
    {
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 ">
            { isPending && <LoadingContact/> }
          {
       data?.data?.map((item: IContact) => (
          <div
          key={item?.name}
        className="w-44 h-40 p-3 rounded-2xl bg-white dark:bg-black border-2 "
      >
        <p className="sm:text-sm lg:text-base text-center font-semibold text-neutral-500 ">
          {item?.name}
        </p>
        <p className="sm:text-sm lg:text-base text-center font-semibold text-neutral-500 ">
          {item?.email}
        </p>
        <p className="paragraph text-center text-neutral-500 pt-2 ">
          {item?.message}
        </p>
      </div>
        ))
      } 
            
      </div>
    }</>:
     <div className="relative z-20 py-0 lg:py-0 max-w-7xl mx-auto ">
           <div className="relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              {/* <div className=" h-full w-full hidden md:block ">{feature.skeleton}</div> */}
              <div className="h-full w-full ">
  {feature.skeleton && feature.skeleton}
</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
   
   }
   </div>
 
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-center tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-center mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-center max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};



export function ContactForm() {
const { mutate: createContact } = useCreateContact()

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
  createContact(data)
};
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl px-4 md:px-8 shadow-input bg-white dark:bg-black">
      <h2 className="title text-center text-neutral-800 dark:text-neutral-200">
        Message me
      </h2>
      <p className="text-neutral-600 paragraph max-w-sm mt-2 dark:text-neutral-300">
      If you&apos;d like to work with me, let&apos;s discuss, and feel free to message me!
      </p>
  <Form
  resolver={zodResolver(contactValidationSchema)}
  onSubmit={handleSubmit}
  >
  <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" type="text" name="name" />
          </LabelInputContainer>
         
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email </Label>
          <Input id="email" placeholder="Enter your email" type="email" name="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          {/* <Input */}
          <Textarea
          id="message"
          type="text"
  placeholder="Enter your message here..." 
//   className="custom-class" 
   rows={4}  
  name="message"/>
        </LabelInputContainer>
              <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
  </Form>
      </div>
  );
}

export const Skeleton = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent ">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

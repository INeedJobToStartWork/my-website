/* eslint-disable react/display-name */
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import { Slot } from "radix-ui";
import { Button } from "@/components";
import { cn } from "@/utils";
import { TSlot } from "@/types";

//----------------------
// Types
//----------------------

type ProfileLayoutProps = {
  sockets?: Parameters<typeof ProfileLayout.template>[0];
};

type ProfileLayoutRootProps = React.ComponentPropsWithoutRef<"header"> & TSlot;

//----------------------
// Functions
//----------------------

export const ProfileLayout = (props: ProfileLayoutProps & ProfileLayoutRootProps) =>
  props.children ? <ProfileLayout.Root>{props.children}</ProfileLayout.Root> : ProfileLayout.template(props.sockets);

//----------------------
// Components
//----------------------

//----
// Root
//----

ProfileLayout.Root = (props: ProfileLayoutRootProps) => {
  const Comp = props.asChild ? Slot.Root : "header";
  return <Comp className={cn("relative w-full h-[20dvh] overflow-hidden", props.className)}>{props.children}</Comp>;
};

//----
// Background
//----

ProfileLayout.BackgroundVideo = (props: React.ComponentPropsWithoutRef<"video">) => (
  <video
    {...props}
    autoPlay
    muted
    loop
    playsInline
    className={cn("w-full h-full block object-cover", props.className)}
  />
);

ProfileLayout.BackgroundImage = (props: ImageProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    loading="eager"
    fetchPriority="high"
    {...props}
    className={cn("w-full h-full block object-cover", props.className)}
  />
);

//----
// Bar
//----

ProfileLayout.Bar = (props: React.ComponentPropsWithoutRef<"div"> & TSlot) => {
  const Comp = props.asChild ? Slot.Root : "div";
  return (
    <Comp className={cn("absolute bottom-0 w-full min-h-12 bg-background rounded-t-[10rem] z-10", props.className)}>
      {props.children}
    </Comp>
  );
};

ProfileLayout.BarWrapper = (props: React.ComponentPropsWithoutRef<"div"> & TSlot) => {
  const Comp = props.asChild ? Slot.Root : "div";
  return <Comp className={cn("wrapper flex flex-row justify-between", props.className)}>{props.children}</Comp>;
};

//----
// Templates
//----

ProfileLayout.BarContent = () => (
  <>
    <Image
      src="/avatar.jpg"
      alt="avatar"
      width={64}
      height={64}
      loading="eager"
      fetchPriority="high"
      className="relative top-[-50%] -translate-y-1/2 w-16 h-16 aspect-square rounded-full"
    />
    <Button className="font-bold mt-1 cursor-pointer">Message</Button>
  </>
);

//----
// Template
//----

/** Template and Socket Handler */
ProfileLayout.template = ({
  Root = ProfileLayout.Root,
  Background = () => <ProfileLayout.BackgroundVideo src="/abstract-art.mp4" />,
  Bar = ProfileLayout.Bar,
  BarWrapper = ProfileLayout.BarWrapper,
  BarContent = ProfileLayout.BarContent,
} = {}) => (
  <Root>
    <Background />
    <Bar>
      <BarWrapper>
        <BarContent />
      </BarWrapper>
    </Bar>
  </Root>
);

//----------------------
// Default Export
//----------------------

export default ProfileLayout;

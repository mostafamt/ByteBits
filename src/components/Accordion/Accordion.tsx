"use client";
import React from "react";
import AccordionBox from "@/components/AccordionBox/AccordionBox";
import AccordionContent from "@/components/AccordionContent/AccordionContent";

type Props = {};

const services = [
  {
    header: (
      <>
        <span>Web</span> Development
      </>
    ),
    text: (
      <p>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as
        the most popular gun in American crime. Do you believe that shit? It actually says that in
        the little book that comes with it: the most popular gun in American crime. Like
        they&apos;re actually proud of that shit.
      </p>
    ),
    image: "/service-1.svg",
  },
  {
    header: (
      <>
        <span>App</span> Development
      </>
    ),
    text: (
      <p>
        The path of the righteous man is beset on all sides by the iniquities of the selfish and the
        tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the
        weak through the valley of darkness, for he is truly his brother&apos;s keeper and the
        finder of lost children. And I will strike down upon thee with great vengeance and furious
        anger those who would attempt to poison and destroy My brothers. And you will know My name
        is the Lord when I lay My vengeance upon thee.
      </p>
    ),
    image: "/service-2.svg",
  },
  {
    header: <>Cyber Security</>,
    text: (
      <p>
        My money&apos;s in that office, right? If she start giving me some bullshit about it
        ain&apos;t there, and we got to go someplace else and get it, I&apos;m gonna shoot you in
        the head then and there. Then I&apos;m gonna shoot that bitch in the kneecaps, find out
        where my goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m talking to
        you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in
        there, you the first motherfucker to get shot. You understand?
      </p>
    ),
    image: "/service-3.svg",
  },
  {
    header: <>AI Integration</>,
    text: (
      <p>
        Normally, both your asses would be dead as fucking fried chicken, but you happen to pull
        this shit while I&apos;m in a transitional period so I don&apos;t wanna kill you, I wanna
        help you. But I can&apos;t give you this case, it don&apos;t belong to me. Besides,
        I&apos;ve already been through too much shit this morning over this case to hand it over to
        your dumb ass. Look, just because I don&apos;t be givin&apos; no man a foot massage
        don&apos;t make it right for Marsellus to throw Antwone into a glass motherfuckin&apos;
        house, fuckin&apos; up the way the nigger talks. Motherfucker do that shit to me, he better
        paralyze my ass, &apos;cause I&apos;ll kill the motherfucker, know what I&apos;m
        sayin&apos;? You think water moves fast? You should see ice. It moves like it has a mind.
        Like it knows it killed the world once and got a taste for murder. After the avalanche, it
        took us a week to climb out. Now, I don&apos;t know exactly when we turned on each other,
        but I know that seven of us survived the slide... and only five made it out. Now we took an
        oath, that I&apos;m breaking now. We said we&apos;d say it was the snow that killed the
        other two, but it wasn&apos;t. Nature is lethal but it doesn&apos;t hold a candle to man.
      </p>
    ),
    image: "/service-4.svg",
  },
];

const Accordion = (props: Props) => {
  const [open, setOpen] = React.useState(Array(services.length).fill(false));

  const handleSwitch = (idx: number) => {
    console.log("handleSwitch");
    setOpen(prevState => {
      const newState = [...prevState];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  return (
    <div className="container">
      <ul>
        <li>
          {services.map((service, idx) => (
            <AccordionBox key={service.image} open={open[idx]} toggle={() => handleSwitch(idx)}>
              <AccordionContent
                service={service}
                open={open[idx]}
                toggle={() => handleSwitch(idx)}
              />
            </AccordionBox>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Accordion;

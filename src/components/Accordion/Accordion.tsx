import React from "react";
import AccordionBox from "@/components/AccordionBox/AccordionBox";
import AccordionContent from "@/components/AccordionContent/AccordionContent";

type Props = {};

const services = [
  {
    header: (
      <h3>
        <span>Web</span> Development
      </h3>
    ),
    text: (
      <p>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as
        the most popular gun in American crime. Do you believe that shit? It actually says that in
        the little book that comes with it: the most popular gun in American crime. Like they're
        actually proud of that shit.
      </p>
    ),
    image: "/service-1.svg",
  },
  {
    header: (
      <h3>
        <span>App</span> Development
      </h3>
    ),
    text: (
      <p>
        The path of the righteous man is beset on all sides by the iniquities of the selfish and the
        tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the
        weak through the valley of darkness, for he is truly his brother's keeper and the finder of
        lost children. And I will strike down upon thee with great vengeance and furious anger those
        who would attempt to poison and destroy My brothers. And you will know My name is the Lord
        when I lay My vengeance upon thee.
      </p>
    ),
    image: "/service-2.svg",
  },
  {
    header: <h3>Cyber Security</h3>,
    text: (
      <p>
        My money's in that office, right? If she start giving me some bullshit about it ain't there,
        and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
        Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She
        gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go
        in there, and that nigga Winston or anybody else is in there, you the first motherfucker to
        get shot. You understand?
      </p>
    ),
    image: "/service-3.svg",
  },
  {
    header: <h3>AI Integration</h3>,
    text: (
      <p>
        Normally, both your asses would be dead as fucking fried chicken, but you happen to pull
        this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.
        But I can't give you this case, it don't belong to me. Besides, I've already been through
        too much shit this morning over this case to hand it over to your dumb ass. Look, just
        because I don't be givin' no man a foot massage don't make it right for Marsellus to throw
        Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker
        do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what
        I'm sayin'? You think water moves fast? You should see ice. It moves like it has a mind.
        Like it knows it killed the world once and got a taste for murder. After the avalanche, it
        took us a week to climb out. Now, I don't know exactly when we turned on each other, but I
        know that seven of us survived the slide... and only five made it out. Now we took an oath,
        that I'm breaking now. We said we'd say it was the snow that killed the other two, but it
        wasn't. Nature is lethal but it doesn't hold a candle to man.
      </p>
    ),
    image: "/service-4.svg",
  },
];

const Accordion = (props: Props) => {
  return (
    <div className="container">
      <ul>
        <li>
          {services.map(service => (
            <AccordionBox key={service.image}>
              <AccordionContent service={service} />
            </AccordionBox>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Accordion;

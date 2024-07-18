"use client";
import { useEffect, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText: React.FC = () => {
    const textRef = useRef<HTMLHeadingElement>(null);
    let interval: NodeJS.Timeout | null = null;

    useEffect(() => {
        const textElement = textRef.current;

        const handleMouseOver = (event: MouseEvent) => {
            if (!textElement) return;

            let iteration = 0;
            clearInterval(interval!);

            interval = setInterval(() => {
                if (textElement) {
                    textElement.innerText = textElement.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return textElement.dataset.value![index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("");
                }

                if (iteration >= textElement.dataset.value!.length) {
                    clearInterval(interval!);
                }

                iteration += 1 / 3;
            }, 30);
        };

        if (textElement) {
            textElement.addEventListener('mouseover', handleMouseOver);
        }

        return () => {
            if (textElement) {
                textElement.removeEventListener('mouseover', handleMouseOver);
            }
        };
    }, []);

    return (
        <p
            ref={textRef}
            data-value="Los mejores productos"
            className="w-fit h-16 text-2xl text-black rounded-xl p-4 hover:bg-black hover:text-white transition-colors"
        >
            Los mejores productos
        </p>
    );
};

export default AnimatedText;

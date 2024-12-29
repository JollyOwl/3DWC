import { NeatGradient } from "@firecms/neat";

// Define your Neat Gradient configuration
const config = {
    colors: [
        {
            color: '#43008E',
            enabled: true,
        },
        {
            color: '#1E0062',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#8B6AE6',
            enabled: true,
        },
        {
            color: '#2101AB',
            enabled: true,
        },
    ],
    speed: 2.5,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 3,
    waveFrequencyY: 3,
    waveAmplitude: 4,
    shadows: 1,
    highlights: 5,
    colorBrightness: 1.1,
    colorSaturation: 4,
    wireframe: true,
    colorBlending: 10,
    backgroundColor: '#000000',
    backgroundAlpha: 1,
    grainScale: 3,
    grainSparsity: 0.02,
    grainIntensity: 0.3,
    grainSpeed: 1,
    resolution: 1,
};

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gradient");

    if (canvas) {
        // Initialize NeatGradient with the configuration
        const neat = new NeatGradient({
            ref: canvas,
            ...config,
        });

        // Optional: Update properties dynamically
        neat.speed = 6;

        // Optional: Clean up if needed (e.g., React unmount)
        // neat.destroy();
    } else {
        console.error("Canvas element with id 'gradient' not found.");
    }
});

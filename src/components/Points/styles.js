export default `
    .tsb__points {
        font-family: SkyBold,Arial,sans-serif;
        font-size: 20px;
        background-color: #D92231;
        text-align: center;
        line-height: 48px;
    }

    .tsb__points-animating {
        animation: pulse 5s infinite;
    }

    @keyframes pulse {
        0% {
            background-color: #001F3F;
        }
        100% {
            background-color: #FF4136;
        }
    }
    `

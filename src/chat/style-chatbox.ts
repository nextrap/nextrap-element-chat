import { css } from "lit";

export const styleChatbox = css`
    :host {
        display: block;
        height: 100%;
        --border-color: var(--nxa-chat-border-color, #dadde1);
        --background-color: var(--nxa-chat-background-color, white);
        --box-shadow: var(--nxa-chat-box-shadow, 0 2px 10px rgba(0, 0, 0, 0.1));
        --border-radius: var(--nxa-chat-border-radius, 10px);
    }

    .chat-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--background-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    [part="header"] {
        padding: 15px 20px;
        border-bottom: 1px solid var(--border-color);
        background-color: white;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    [part="message-container"] {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }

    [part="input"] {
        border-top: 1px solid var(--border-color);
        padding: 15px 20px;
        background-color: white;
    }

    [part="footer"] {
        padding: 10px 20px;
        border-top: 1px solid var(--border-color);
        background-color: white;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
    }
`;

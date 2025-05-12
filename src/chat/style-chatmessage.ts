import { css } from "lit";

export const styleChatmessage = css`
    :host {
        /* colors */
        --chat-message-bg-me: var(--nxa-chat-message-bg-me, #21918c);
        --chat-message-text-me: var(--nxa-chat-message-text-me, #ffffff);
        --chat-message-bg-other: var(--nxa-chat-message-bg-other, #e4e6eb);
        --chat-message-text-other: var(--nxa-chat-message-text-other, #050505);
        --chat-message-bg-both: var(--nxa-chat-message-bg-both, #f0f2f5);
        --chat-message-text-both: var(--nxa-chat-message-text-both, #65676b);
        --chat-message-header-text-me: var(
            --nxa-chat-message-header-text-me,
            #ffffff
        );
        --chat-message-header-text-other: var(
            --nxa-chat-message-header-text-other,
            #65676b
        );
        --chat-message-header-text-both: var(
            --nxa-chat-message-header-text-both,
            #65676b
        );
        --chat-message-time-text: var(--nxa-chat-message-time-text, #8a8d91);
        --chat-message-time-text-me: var(
            --nxa-chat-message-time-text-me,
            rgba(255, 255, 255, 0.8)
        );
        --chat-message-footer-border-color: var(
            --nxa-chat-message-footer-border-color,
            rgba(0, 0, 0, 0.1)
        );
        --chat-message-footer-border-color-me: var(
            --nxa-chat-message-footer-border-color-me,
            rgba(255, 255, 255, 0.2)
        );
        --chat-message-footer-text: var(
            --nxa-chat-message-footer-text,
            #65676b
        );
        --chat-message-footer-text-me: var(
            --nxa-chat-message-footer-text-me,
            rgba(255, 255, 255, 0.8)
        );
        --chat-message-indicator: var(--nxa-chat-message-indicator, #440154);
        --date-indicator-bg: var(--nxa-date-indicator-bg, #f0f2f5);
        --date-indicator-text: var(--nxa-date-indicator-text, #65676b);
        --date-indicator-border-color: var(
            --nxa-date-indicator-border-color,
            #dadde1
        );
        --selected-indicator-bg: var(
            --nxa-selected-indicator-bg,
            rgba(34, 145, 140, 0.1)
        );
        --focus-outline-color: var(--nxa-focus-outline-color, #21918c);

        /* Layout */
        --chat-message-container-max-width: var(
            --nxa-chat-message-container-max-width,
            65%
        );
        --chat-message-bubble-border-radius: var(
            --nxa-chat-message-bubble-border-radius,
            4px
        );

        /* Typography */
        --chat-message-header-font-size: var(
            --nxa-chat-message-header-font-size,
            12px
        );
        --chat-message-content-font-size: var(
            --nxa-chat-message-content-font-size,
            14px
        );
        --chat-message-footer-font-size: var(
            --nxa-chat-message-footer-font-size,
            11px
        );
    }

    :host(:focus-visible) {
        outline: 2px solid var(--focus-outline-color);
        outline-offset: 2px;
    }

    :host(.muted) .message-bubble {
        opacity: 0.7;
        filter: grayscale(1);
    }

    :host(.selected) .message-row {
        background-color: var(--selected-indicator-bg);
    }

    .message-row__wrapper {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: flex-start;
    }

    .message-row {
        display: flex;
        width: 100%;
    }

    /* Me Message */
    .message-row.me {
        justify-content: flex-end;
    }

    /* Other Message */
    .message-row.other {
        justify-content: flex-start;
    }

    /* Both Message */
    .message-row.both {
        justify-content: center;
    }

    .message-container {
        display: flex;
        max-width: var(--chat-message-container-max-width);
        position: relative;
    }

    .message-bubble {
        flex-grow: 1;
        padding: 12px 16px;
        border-radius: var(--chat-message-bubble-border-radius);
        position: relative;
        word-wrap: break-word;
    }

    /* Button space */
    .message-control {
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.2s;
        padding: 0 8px;
    }

    .message-container:hover .message-control,
    :host(:focus-within) .message-control {
        opacity: 1;
    }

    /* Message Header */
    .message-header {
        font-size: var(--chat-message-header-font-size);
        margin-bottom: 4px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }

    .message-header :last-child {
        margin-left: auto;
    }

    .message-row.me .message-header {
        text-align: right;
        color: var(--chat-message-header-text-me);
    }

    .message-row.other .message-header {
        text-align: left;
        color: var(--chat-message-header-text-other);
    }

    .message-row.both .message-header {
        text-align: center;
        color: var(--chat-message-header-text-both);
    }

    [name="sender"]::slotted(*) {
        font-weight: bold;
    }

    [name="recipient"]::slotted(*) {
        font-style: italic;
    }

    [name="recipient"]::before {
        content: "▶";
        font-size: 10px;
        margin-right: -4px;
        margin-left: -4px;
        position: relative;
    }

    [name="control"]::slotted(*) {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background-color: #e5e6e7;
        color: #242424;
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    [name="control"]::slotted(*:hover) {
        background-color: #c5c6c7;
    }

    [name="time"]::slotted(*) {
        margin-left: auto;
        color: var(--chat-message-time-text);
    }

    .message-row.me [name="time"]::slotted(*) {
        color: var(--chat-message-time-text-me);
    }

    .message-time {
        color: var(--chat-message-time-text);
    }

    .message-row.me .message-time {
        color: var(--chat-message-time-text-me);
    }

    /* Message Footer */
    .message-footer {
        font-size: var(--chat-message-footer-font-size);
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--chat-message-footer-border);
        color: var(--chat-message-footer-text);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .message-row.me .message-footer {
        color: var(--chat-message-footer-text-me);
        border-top: 1px solid var(--chat-message-footer-border-me);
    }

    .message-footer ::slotted(*) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    /* Me Message Style */
    .message-row.me .message-bubble {
        background-color: var(--chat-message-bg-me);
        color: var(--chat-message-text-me);
        margin-right: 12px;
        /* Space for the triangle */
    }

    /* Me Triangle */
    .message-row.me .message-bubble:after {
        content: "";
        position: absolute;
        top: 1px;
        right: -9px;
        width: 0;
        height: 0;
        border-left: 10px solid var(--chat-message-bg-me);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Other Message Style */
    .message-row.other .message-bubble {
        background-color: var(--chat-message-bg-other);
        color: var(--chat-message-text-other);
        margin-left: 12px;
        /* Space for the triangle */
    }

    /* Other Triangle */
    .message-row.other .message-bubble:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -9px;
        width: 0;
        height: 0;
        border-right: 10px solid var(--chat-message-bg-other);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Both Message Style */
    .message-row.both .message-bubble {
        background-color: var(--chat-message-bg-both);
        color: var(--chat-message-text-both);
        margin: 0 auto;
    }

    /* Both Message - Left Side */
    .message-row.both .message-bubble:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -9px;
        width: 0;
        height: 0;
        border-right: 10px solid var(--chat-message-bg-both);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Both Message - Right Side */
    .message-row.both .message-bubble:after {
        content: "";
        position: absolute;
        top: 0px;
        right: -9px;
        width: 0;
        height: 0;
        border-left: 10px solid var(--chat-message-bg-both);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    /* Alt Versions */
    .message-row.me.alt .message-bubble {
        position: relative;
        padding-right: 20px;
        /* Make room for the indicator */
    }

    .message-row.me.alt .message-bubble:before {
        content: "";
        position: absolute;
        top: 20px;
        right: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.other.alt .message-bubble {
        position: relative;
        padding-left: 20px;
        /* Make room for the indicator */
    }

    .message-row.other.alt .message-bubble:after {
        content: "";
        position: absolute;
        top: 20px;
        left: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.both.alt .message-bubble {
        position: relative;
        padding-left: 20px;
        padding-right: 20px;
    }

    .message-row.both.alt .message-bubble .left-indicator {
        content: "";
        position: absolute;
        top: 20px;
        left: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-row.both.alt .message-bubble .right-indicator {
        content: "";
        position: absolute;
        top: 20px;
        right: 0px;
        width: 4px;
        height: calc(100% - 20px);
        background-color: var(--chat-message-indicator);
    }

    .message-content {
        margin-top: 4px;
        font-size: var(--chat-message-content-font-size);
    }

    .message-content ::slotted(p) {
        margin: 0;
    }

    .date-indicator__wrapper {
        display: flex;
        justify-content: center;
    }
    .date-indicator {
        background-color: var(--date-indicator-bg);
        color: var(--date-indicator-text);
        border: 1px solid var(--date-indicator-border-color);
        padding: 8px 16px;
        position: relative;
        width: fit-content;
    }

    .date-indicator:before,
    .date-indicator:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 30px;
        height: 1px;
        background-color: var(--date-indicator-border-color);
    }

    .date-indicator:before {
        left: -40px;
    }

    .date-indicator:after {
        right: -40px;
    }

    .highlight-indicator {
        line-height: 1;
        margin-right: -4px;
        font-size: 1rem;
        margin-top: -4px;
    }

    .muted-indicator {
        margin-right: -4px;
    }

    .muted-indicator > svg {
        width: 1rem;
        height: 1rem;
    }
`;

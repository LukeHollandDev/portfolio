<template>
    <nav class="nav">
        <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul>
    </nav>
</template>

<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    text-align: center;
    font-weight: bold;
}

.nav ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1em;
    padding: 0;
}

.nav a {
    color: #fff;
    text-decoration: none;
}

@media (prefers-color-scheme: light) {
    nav {
        color: #213547;
        background-color: #ffffff;
    }

    .nav a {
        color: #213547;
    }
}
</style>

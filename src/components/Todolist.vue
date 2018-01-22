<style scoped>
    .container {
        width: 90%;
        margin: 0 auto;
    }

    label {
        color: #fff;
        background-color: #ffcc00;
        border-radius: .4rem;
        width: 4rem;
        margin: 0 auto;
        text-align: center;
        margin-top: .8rem;
    }

    input {
        margin-top: .8rem;
        box-shadow: none !important;
        height: 3.2rem;
        border-radius: .4rem;
        background-color: #e24a2e;
        color: #fff;
        border: 0;
    }

    input::-webkit-input-placeholder {
        color: #fff;
        font-weight: lighter;
    }

    input:focus {
        border-color: #fff;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: square;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr;
    }

    ul li {
        border-radius: .4rem;
        height: 3.2rem;
        display: grid;
        align-items: center;
        padding: 0 15px;
        background-color: #ffcc00;
        color: #f7f7f7;
        text-shadow: 0px 1px 0px #333;
        font-size: 1.4rem;
    }

    .divider:after {
        display: block;
        content: '';
        border-bottom: 1px dashed #ffcc00;
        margin: 1.2rem 0;
    }
</style>

<template>
    <div class="container">
        <div class="column">
            <div class="field">
                <label for="" class="label">
                    Task
                </label>
                <div class="control">
                    <input type="" class="input" placeholder="Insert a task">
                </div>
            </div>
        </div>

        <div class="divider">
        </div>

        <div class="column">
            <ul class="item-list">
                <li class="list">11</li>
                <li class="list">21</li>
                <li class="list">31</li>
                <li class="list">41</li>
                <li class="list">51</li>
            </ul>
        </div>
    </div>
</template>

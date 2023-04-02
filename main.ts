let Mise = 0
let Prédiction = 0
let Dé1 = 0
let Dé2 = 0
let Somme = 0
input.onButtonPressed(Button.A, function () {
    Mise += 1
    basic.showNumber(Mise)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Mise = 0
    Prédiction = 0
    Dé1 = 0
    Dé2 = 0
    Somme = 0
    basic.showString("Debut")
    basic.showString("Mise (A)?")
    basic.showString("Prediction (B)?")
})
input.onButtonPressed(Button.AB, function () {
    if (Mise == 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (Prédiction == 0) {
        basic.showIcon(IconNames.Angry)
    }
    if (Dé1 == 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (Dé1 == 0) {
        basic.showIcon(IconNames.Angry)
    }
    if (Dé2) {
        basic.showIcon(IconNames.Sad)
    } else {
        Somme = Dé1 + Dé2
        if (Prédiction > Somme) {
            basic.showString("Tu perds mise de (" + ("" + Mise + "$)"))
        } else if (Prédiction < Somme) {
            basic.showString("Récupère mise de (" + Mise + "$)")
        } else {
            basic.showString("Bravo! " + ("Réclame " + (Mise + Prédiction) + "$"))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Prédiction += 1
    basic.showNumber(Prédiction)
})
input.onGesture(Gesture.Shake, function () {
    if (Dé1 == 0) {
        Dé1 = randint(1, 6)
        basic.showString("D1: " + Dé1)
    } else if (Dé2 == 0) {
        Dé2 = randint(1, 6)
        basic.showString("D2: " + Dé2)
    } else {
        basic.showString("Fini (A+B)")
    }
})

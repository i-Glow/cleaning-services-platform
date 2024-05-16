import { Sparkles, Star, ArrowUpRight } from "lucide-react";
import HTag from "../../components/HTag";
import Nav from "../../components/Nav";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="bg-background-alt">
      <Nav />
      <section className="max-w-[1280px] mx-auto py-20 flex gap-20">
        <div>
          <HTag className="mb-4">Nous sommes Clino</HTag>
          <h1 className="mb-10 text-5xl">Feel Your Way For Freshness</h1>
          <p className="max-w-[45ch]">
            Experience the epitome of cleanliness with clino, we provide
            top-notch cleaning services tailored to your needs, ensuring your
            spaces shine with perfection
          </p>
          <Button className="p-2 h-max text-md my-10 rounded-full">
            <p className="ml-6">NOS SERVICES</p>
            <div className="ml-6 w-12 aspect-square rounded-full bg-blue-950 flex justify-center items-center">
              <Sparkles className="text-primary" />
            </div>
          </Button>
        </div>
        <div className="w-96">
          <img src="src/assets/hero.png" alt="" />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto">
        <HTag className="mb-5">Nos services</HTag>
        <div className="flex justify-between">
          <h1 className="text-4xl">Elevate Your Space With Our Service</h1>
          <Link to="/">
            <HTag className="rounded-full py-2 px-5 flex items-center">
              <p>Plus</p>
              <ArrowUpRight />
            </HTag>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between my-10">
          {[...Array(3)].map((_) => (
            <div className="relative w-96 aspect-square rounded-md bg-white overflow-hidden group hover:cursor-pointer">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDQMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAECBQYA/8QANxAAAgIBAwMDAgQEBQQDAAAAAQIAAxEEITEFEkETIlFhcQYjMoEUQpGhFTRSsfEzcsHRQ+Hw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACwRAAICAQQCAgIABQUAAAAAAAABAhEDBBIhMQVBEyIyURRCYXGRFTOhsfD/2gAMAwEAAhEDEQA/AE62nSTPSUNVHiEAw43Ey5UCVxic6XYxA3bEWXRCnIgspoqwyYDYNF6VipMGQ2giRTCKISKZ4xq6IkQFyYaDPMMCMRaQq4zGIckC9LJ4jIh2eNWPENFpl6QMxkSpFrN4xkii1SgSIjB6vtK7Qi8aM5R7iZVml9DAtwMZhJinEDbdkcyNhRiIahmJlD4UG0THvA8yIDJVHQ6OmxwNsbRiOflkkbGn04XmSzDKVhyO0YEtACdj9zHJ4lhpNixsbuOOJTYxQQqe/wBQssrcN4Sosr3BjjmXuKqJC6uxQe79Um4nxRYYdRyBuZLQt6dWc5U2OYaZ0GNVvCTAcRqtsiKygUWyJy8nDCRR1iiwYxKZD2d4tlBqRFSFyQ0oihTCQ0iijjzGxDiQh33hpB0SwyIxIiQuRgwhqLVkYjYkaZW8g8Qwopga85MZEOg/ouV7ghx8w6A3xTqypBUbyBULXFmOJVhqkLOpB24kTGJgrCcbQrCBKDvmXZGW9MuwEhW6jc6V01dmYZPMJIw5s7OgqqSscQzBKTZYv8CQEDbZsRneQiRn6hT6mMymzTGqK2kJVsd5RVtsqAAoMnoj7KO5VvaM7SrLirANYHAGNzJYxRoIFVQARxLBbZzqtiMs30M1NkQkwWhut9oM+hTQTunNzLkuir2EDaZi1EB6hJkYW0Km8WwGhqkYiJMXIZBxAFk90ZFEok4IjUi0inmMQxFvENFpALMCEkGgLP2xiGKNvglar7h+VTYwPB7YxRb6QEsuLH+UkhnRaG3+Lpq1Vborng+Zox45P0YtV5LDjxt45XIe1N38Vq3TRIWrqHae3g4+I+cfpweYjqpfLvbBXaG0LkVE7eBmZtkl6PSabX4ckUnLky7QAxBGCPmCdNdWAZfniWi0wFiiWGmBOBIWM6BA93GwhIVkdI6vRr2VjA8RhzJu2GZsyhZViAvMIr2IO7r3P4zKsfFJ8CpNlr+oTgGBbYfCVFHq7h+oyOylJJgnZ60wSSIN0GkmxmtgKd/IyZdipfkLWIoCuPmQNP0EY8HnMIo5b1IR1FEYptENAyiOV2ZEjFNBlbac/MiHrBtMlkQAA90psJjNQ2EVJi2N1xDdipBSZEUkVBjkFRcHaGi6KnmEgkiC+Ac8DzGIKgqVN6R1FlRNIGcE9pYfSNjV8iM2Vxi/jpse09XTvTr1WmX1Q+6i05UfT6zfjxQPP63yercNi4Iv62KrPQdWVlHuXwPt8zV8dfiefnqJfznP9X6w19/ciuPTXICk7r8xnSoPFLfzRPQ+pjR09pyoJypYZO/iVVoXLI4yN+jU6nU1FwPRrbfLnGB8jyYt0g8cMuXhIz9Zrf8AErezRaL+KCe1tQzdpP2mHNmhF8nqNFHNp48Sf/ZnapX09rVXIyP8N8Sk75R6GElkipIUd4QxICzcyBJGr0arJyZaMud8HToQqxhzmUdwOTIRIWe3B7mOBKsNR4E9RqAz9in2mSy1H2Ve3tUDO0gPbAG8BsZguSGKAHU6hWrx5zFykHCDTLerlNj9Je4jjzyQ7FasMZHKi1FNgxa7KMbDEH5g/jRzJMedFBaSciEmU0aFB4hN8GeQ4h2mHMCFzkTCygeBmCQLXzFyKYyniJFsvmWizwjESi4MOyUQ2MRiDRNIWr821FffCBslc/Jx4+kfjxznFuKMmr1cMFRcqbK61tU6DNTIfNbMSGH77j6YiY5OROPKuxHo2qNY1Gl9Q/ltlPufM62nyKUTl+Qhcty9mi1dtndUQzFcYOBuZr37KPMalTdwQs+gqubvTYD9if8AxGKSaMcMmTHxY7pNKumQvWvcxySGA7sfSKWXc9prx45W3TEeu62yqtdKLMWWZ9QgkYX4iMs0j0fj8FrkX0nrVKuFKjYYUZC/QDyfrOVnmpM7qlCqXodu1FGoQ6bWGxSNlZwG9Nv24EXieTG7XRWLI4u0Ylqmux62YEocZHB+s6MXas7EXuVgcdxCjyZdkfB03S6uxB9oSMGaVmmXwIRlSFrLDYSOMSuxqVKwWoYEBc7QgFYlqQFHeuOIDVchQlfAmb/UAA5zFSmNWP2RfUVZSzbGLbYcZIl60wvaYLKU2VtUqfadpW5oJST7LOrGvuYyt7KTRAYgDEgVmJotDqNafyKyw+ZslkjHtmvJlhj/ACY7f0fV6Sv1LV9v+0kM8JOkJhqceR0mUpbaPfRclY0jzFlBoMrbTBLsjJHMBlBa4qTBYysAAuJEQ8YyISIB3jAqLEjBzj94RVCfUddqqKLT06wLqK6SwVl7hjywHzOrjSen2o8x5DFP/UXPIvrxRjdK/Ees6hodTp+q2Pa9IDJedmHjBnPz6aEHughkMjjK0X6RdWdYbKwyjGM9uSxzOhpobUBmnKUfszq8VkKBZkgdzhlI/wDo/tN8f0cDV4vtvJUYtLYfcbgLlB+3iTbH9GNOTfbCraiB2V0FibEscK30A5z/AEgSVG/R4Url7Zx/V7DZre8v8ZYjGN95hypyiz0uNrFCP9g3+Pf4P0qzXUKNRaHWutHHtUnkn+8wfDulTJObkuVRXp/4l1nWKbP4tEresAjUogUAE/oI+v8A4m3T4oY7Xoy503DdiXP6CdRIN4dVAVlByPP1jslbvr0ej8W8n8NFZHyV0FJtvz4EWbMkqR09A9OsQkznPlkWahV5l7iLGxZtQsvcW4voTa3vfGYLkVtpFLrSB2cmLlL0HGPNlLFWulQP1HcmKLUuRa5mcKMmVuLXASlCdicCVZUnRZyOBAbLTLdpwATzKslov2CVu/qVbNLotlOh0yLgffE5mp1cvkoyam8kuSev6pbtAxQjE0ePy78pNJDbkOSQ8T0DfB2GNVzFmYAwhwJiZQQHMWyg1cU2Cw4MEEsGhIlEd0NIJI8DvDCK2NtDRaVgho+oalPU0FYZ0ycH+f6ZmrDmUOGc/wAlp8WX7SfKOe1+ttas0LRTRufUSte0lvr/AOo6UN7s4+PDGAfolbnvLcsCMjzidDHj+jZlz5oxyRh7Z1Glt1FmmrcK96AghQwG3wF5AEuNGTUw7pB1scs3ZXc3cf0ZG+fOPMc6SOVCM5zqhLqepbtTTrSa2wVJtxk/PEy5ZHotFgS59I5/qSH00K4IrHbv5Ejx1jtD8WdZMsoy4a6E9LaiiyjUUrbRZ/1KyePgiYJ3GVpWb54t67NLp+lbVFNJoNPXTpVbusVmyQflj5jcanltC5vFpoOUu/RudT6b61KiplVlGAPpH5lFcRB8b5RQT+X2U6XojTjvwT5xM6R2Z6iOVXEcutC5EknQEYiOqPqJ7W3i2xidGa11ikoBlpNzC2p8h6kK097tvKcgZVdAjaA3cTmBd8ltUuCSxtXCgsfgDMm4U6XLJNdq15bT2Z/7DtAe7qilOLfa/wAmx0/o4agajqFjVIRlalO+PkzTi0zkrmYM2u+3x4lY3X0PptiixdRbjOSM+PiG9Er7FvXZ48bUNJ0XpgHeRa45ALyv4OIp67UXXCLDR9Lb9FH03Yw/4PH+iS1Gp/f/AAcnQzPSs8rnjUzq5Etw16Xq6Fx8Zh6KahmAg9uQ5qo4cr8T1LlxZ13+x+r9ImDK+RbCzM2UESKkCGSKZTDZkQJUtDSDRIMNFlgd4aIRZjG8JFrs6D8P6tK9N+nJE5+rzPEc/VQ3TM78Qfh9Op9ROur1Nau2C9TL/Sdvx+o36eDlGzjZk4SasSHQ9RpaO1QvGxrPH9fM7Uc8GttHFy4Myn8idtGbV/Gaa3up1AqfOGc+fviKaS6Zuhl+RVKLs0LrNWlalNfpu/8A0Y8//uILlx2VDF97cODNrr1OpYYfttB3JycxexPls2yzbFUFwPt0q41FTjuPOfsJo3rbtMUcb+T5L5FV/C+rvcmh6kA/1uMTn58sU/wOxgyUuWa/+Et0jSVsNQly2YDlf5X+PtHaHMp7kzBrscpzUgD2OwwmS3yI3JFXZj2xivsUo1D6awpYSSfmZZSOp43Lc9oHV6vBMQ5WeiURarV8yrAkgaXobmYyJl06NnS9C1esrD2WLRU3Bbkj6CMWGUv6HPy+Qx43S5Y7R+GdJXZm+97kH8uO3JjI6eK7Zjn5LJKP0jyaVKaPSL+TUlfaPA3H7x8ccV0jJKWXI/s2AbrCK43yc7bRqgGtK6sT1+re23Ab24z2/WWuDRhx7YhKNkV/LDGPrL3L2DJ32FVzWvYWLAg4gtgtbuQddiilMqRz5kbLnusw6U9izxOeVzOtPljtIzp2ETjlWVCfZyT+3WWr8MZ6xSvGjtL8EP0n2iY8jFMMIhsouvMXJgh1iiggMhRt9L6Euor9XVWkBuFENTguGY82rcHUEI9X0B0GpFakmsjKkxr/AKGjTZvljz2JrJZoKWn2wovktI2elJ26fPGROP5Gd8GLO7lQv1jWauu1EXuSkrsQcAz03hZwy6SKXa4ZxNXFxydXZktrtWGy1xbbcZnW2UZVFS9UCvvs1C4cjjkgD/mLlQ7HjdgaqezftXHgnfMW0jSoscW20BduPjG0JFvGn2WTU6rIxf2/tCpMpRX6GV6pqqOGDnz7YqenUvYScV6I6h1K/qGhr01FfbY9vdZYFwAozDwaVYnaMes1CVIimwafC/qI8mPnJVRyXuk7Yvr9SrAHG/0mHOtqO34jHeTcZmbdVb6dKM7E7KozMfL6PS5JKCuTpG3p/wAJap0VrdTXST/JjJA+8fHTyfbOZPymOMqhGzc0/RumaSpazSLHxuzDc/WPWKKOdk1efI9ydIv1HVmsIi/8CPggcOG7bFLNXacdoO3iFwPWKIrfY7swOcMcynIZFJIitQAMgH3YzK3AtsLqKlNZcj3K2c/MHcDGbug9CM3pMD7VJMty4FyaVotcO61V+MmL3lJ/UJgYGYO4XbMOoZRcfE8dmf2O7JcjenHsYTPuqSYpnL6+r0+oW7c7z1GKd4kdPFK8aDU/piZvkjDiIbBZdeYtsoKICKCqM4A8y7KfR09epNNCLnft4nMz5JJ1E57x7pNk6m/S36Vl1q5AGQRzmM0Wpmp7JckjjnGVwOXJGcidY6hR99paYSOg0Q7dMD8CcTXO5nPycyDajT6fqPTPQ1KkYOVZTupjtLr8ul+0P8GPJBN8nG6/pWr0ZZxYttYPI/Vj5xPSaTzGHUtRapi5YUlaQgupfADbkf2OM/7TqSfoqMfY/SGfpZ1ilQgv9I5PB8ZiN332j4qNA1v9uPuePGcH+h/tGW64I0keNzHfgg4bG+Pj9oaTFvlgr9edOquzAljhUB3ltUKySj0O6LWO7qSxGfiOTOVOFu2P3I2soPooX1IPsxtmBkj7BxxV8h6fww9yK3UNR2Dk1pz/AFmTJiU+zqafV/w8WoR5NihND0yrt0lS1/Lck/vDjCMekLk82Z/dkN1JTuDtDoJacVOrLuzd20lDfiSQEt69iswO0m6gl9VRI2Db4bMqyWUarf5MFsvceCflE/DSbgN3NBLWzS2fMoGK+w1TiulfG0psVK2xR7vzic7YxFtjlDgv6hbiDuB2pdmbpt0X7TyOb8zsSXI9pRuRM0xUzB63V26sN8jE7+kyXjNmnlcaAVcQpsawoiWygiwGUEED2UN9OrNuqrTnfJlSdRsDJKomzrva4CzmZHunwZcYhqiTpm3+Jp0sanY+H5GbnedOzSeT3WqPrCvgjfB0aDtoAHxOBqZXkMEnbD14XSfEkYOcaXsRN0zB1t6q5/mPj4nrfFeIWOsmX/BzNVrq+kDndXQtmbR7X7idvO2J28kVdg6fLKKqXIz0xbG/DnV9IdyBW4OPgDf+0w5KjkjuN+P7dGfXa5LHg93cPo2MEfYx7QVpNf8Av7HrNQtQ9oJJ+fA+IW6lSFTmkZ9ha64WWsWK8Z8QJc8mbdbNTQuVWvHkljGJgSVo3elav0HNpPG0kpWHh0+5WaVvUy6ntG33gWaY6dIVFrWEk8SrHbVFFtjwcSclWySPbgEbymV2HrbOdsESrFyRcp7PrK3A3yFrG+TBbBkwTnJZOAZW5Fxj7LrQWQf6fEDeyb0mD1FrMAiwXkCjBJ2U9PHPHmQFzJrKgcyWDKxDR71ieU1HEztT7HtNs8yy6FSRn/iCrhwODOnosnFDNO6MxBiaZPk1svFtgl1gN8ECCBZRtdErC1vdj3cCY9bkfEUZ8z5oPqCScnmZodgxFrv8tbnfab8TqSDX5oyzNyZpQTSLm9ZcnUWVN1E3rTioDOJwWnLJSMHQr1TqNddAoqYFiN8Ges8T45RSnNcnG1upa+sOzm7rSPOZ6Ry2rgw4cO52xW59pmctzo6Kj8cbKdO6sdBqLfUUvU9ZUqBy38sRmxKdKXoLHllH7IRs1Fj7sTnycRwp5JMPXp31dIZQRg7tF3TDjBzQX+EqpXtG7EcmBKRrx4EB0b/mNWOVXEpTF/Fbo1KcnCrwJNxrUVCNDqZO/Ak3FWMpskvcA+ydOO5TnmVuLk6D11gEA7yWA5cBD7XBzJYHaCq4xBbQLie7yWwDFb2ybVRf0/b3eQZVewN/NEXapVT28cbS27Kjj5KYUqpH3gkbdshyMZBznxKvgqiq57RsJC2Z3Tz3Viea1SqR3MhoU7MJjfQlkdXr9Sgn6TRpJUyYnUjn0G06DfJtstiDZC6xbdgsuIBDf6Ztoh95z9S7yGTJ+RN+8rGrZcRXUf5d/tNkeJINfkZQbeb0ahvpy92ogZXURWV8UPdUtdKQKx7m4leJ0qzZt7ORrMyxY2znLqtQndZeuR5M9lDHtXBw4SU3YsjG7Zd8TFqdVHFF2dXBhfYO/YRGgyPI22N1MagZ1ylrAFVizcAeZtyXZkhTibXT+hMK1v6hlF8V/P3hWXDHulYbVXImK6QAq8ARMpHTx4tqsRYdxyYpsd0TVVWjdwXDHkygKHKzg7ftLuimM02HHul2A0OV4k3AsspFbbeZLI1aDd+228pySAond2HjMW5WVwg9agEFjtmQByJtYLapRc45lPsqKbi7DdwFbMfIkb4E07FlGKPaB7j5lJ8BSfIMMlXtP6oLZbi3yiLXIbI8wSkivdJvSLozulvkATgavs7uRGuswMQxi9fU05H0l4ZUxa4ZzNi9ljLOnuNsXaIg2WWEGyFx5lFM3unf5QCc/P8A7hmn+Ra6Fh7JEWv3of7TT/MGuzIA33m1M0mn0tMnuidRKomfKwvVdQlbKnJE9B4LBswb/wBnmvK5bfxoTJfUUsvYcETu1ao5uD6yRnNpvQTsCENnjG88dq3OWdxZ6vE1sTCU9A1mrHqWAaer/VZ5nW8fhnjVyRj1OWMvquR2qjpvSkLUoLtRjexuR9p0G0Lxaeb7EtZqrdQ3cScfEW5HQxwUVRnMd8xMmNZXzAIXBGJCBKzgb8iUwWhpMFPtJYIzXZhRmTcC4l+/vgSkRKg1QP7wUBJjlZUbnkcQhLTL9w7D3DAlbgapla7BZspxjyYLkSXAL3d7KW9uYFhN8EGwhiBwJFIBxTBuO5u4wHkSCXVEse4REsrsqkVLKOW3lW3yWZfTDhsCc7Uco7mQ3V/SDMDMzG690/aL9i5dmB1Krs1JONjOhCVo043aFgIQwsBIWe33lWUzoOn4GlWc/N+Rmn+RNsPD2UgDjKEHjE0PsL2ZJHuI8ZmqL4NKfBsdMXtrG28zaifFGXI7Yn1Fqk1hZj3P4B4E9l4qLjpIWeb8h9s3Asda6tnOPtOi3wZFDkMetDSAGvTq9r//ACPviY8sop8o6+nwfJHsQ1PU9TqmJutb/tzsIuWWzfDDGCpIW9QDiBvGUUazIxmDuCoEWGYLZZU5O/iC2QkbSrIXDyrKD12nGBxAciqGKiT5zBbKYzXgGSwHYdLMEHk5ksW0FRznLftKsFog3dz7/pg3bI40gjNg+3YQXKhb5JJysB5EgaIIz4i3kb6IVJA3PMHY3yyWDssJG20aolWCAzvDUSrZn6H2WKJycnKO/I6GndBOfJGZ9jFBimDJWZ/WKsgt8TRgmHilRlLxNY8tIQiURm/of8qJgy/kZ59lrJeLspA1qstJWtC32E2RxZMjqCskpRivsXp/D9xJs1Vi1V84zvOvg8bNq8joVLWxSqCtj3qdN0K9tam5/BJ2m2Hj9NHmSsS46jK7fBznXG/irjqErCHG6r5m6GaMaS6FZ9Dcdy5Zircc4AzjxNG+znfH6YVytlfbnbkH4isq3xNOmnLHOhLvxsZgTOzRPfCsEhnlWXRBMjZRIfaC2XR4nMGyiyjP7SmQYpIORiC2Uw1TFMg8QbKaGO/HBksAKjDA3lWCw3ez+ILkAyy8QJZEgGFH1iHOTZRPcB5zLUPbBZG53ztGxpIBso3+8spdgXJIwISKXYEtaDgcSUHaFqP+os5Mujus3tKc1iYJ9meS5GUODFMFldZX6lZl43TBj2YDr2uV+J0U7VmpPg9IWR/7kKZ0PTKnt04Cj95mWmyZslRRlyTUezQ/htPR7tVZ+07ul8Rjhzk5Zn+TJPiCB2dWWsFdJWF+pnVi4Y1UUHHSNu8jM7Uay24/mvmDLKaoYYR6FHtipZRm0VutyDtmJlkJtMjVVBvfX7WEZj1Mo8MzZtJGfIqb7KyMjnkfJmlZ01wY3pXF8ooWzvxmZ0zerrk93QiEEyyiwlWVRYDG5gssshGNoBC45ksphkOPvAbIGGTzBsAMkFyKYZWguYIRTEybYDChl8Str9gWXVskCHwhci4HP3ksFsnuABhJg0AdmJGeJaYVL0DL5YhRzGWSkkEWrbfmEAZ1fI+847PQG3oW9kxZVyIl2OiIYBdh3LiUnyCYetrCW5+ZvxStD4OxaMGDvTNF/FXAsD2r/eatJp/llb6EZsm1cG9faNHT6dOO4j+k7sYwxKooz48byO5GLZc7v3Oxb7mKeQ6EYRiqQNrYqUwtoFridotzL2g2si3MjQvY8rcC0J2tnMJMFirnmNQDBGMQDK5hpgstmSyi2fMqyFwcwGyFlEGyMIozAcqBDLtAcimEBgOQIRTB7KCK0qgWGVpLAYUYzBbACA7kyAMkAk7HHmEirLLzjzDiUyLgSMfMv2VEmmtVUHEvckVJthMr8SfIi9jMZZzDumvoDsJlyi5GgszCwg4gsFmZ1FRzNWFh4zNHJ+80DToPw+o9PPnM7Xj0tjZj1D5K9TY95mvMzRplwZZMyNmsE5MW2WBYmLkywbMYuwWAcmWmCxewxsAWLOeZoQtgzDAZWEUWkKCJxAbIXUbQWwWXWA2QuNoJTLiCyi4MEFhElMFhVlAhk5ggMOJECFH6ZYB74lojXAYAbGWD6BNuSfMXbGUiUJYbw1yUHCLgRygqIj//2Q=="
                className="h-4/5 w-full rounded-md object-cover"
              ></img>
              <div className="w-full h-1/5 flex items-center px-8 justify-between text-gray-600">
                <h4 className="group-hover:text-primary duration-100">
                  Home Cleaning
                </h4>
                <div className="flex items-center justify-center w-10 aspect-square rounded-full bg-white group-hover:bg-primary group-hover:shadow-lg group-hover:text-white duration-100">
                  <ArrowUpRight />
                </div>
              </div>
              <div className="absolute bg-white top-4 right-4 rounded-md px-3 py-1 flex gap-1 items-center">
                <h6>4.7</h6>
                <Star color="gold" fill="gold" size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

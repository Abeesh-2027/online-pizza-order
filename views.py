from django.shortcuts import redirect, render
from .form import CustomerForm

from .models import*
# Create your views here.
def a(request):
    return render(request,"login.html")
def b(request):
    return render(request,"home.html")
def c(request):
    return render(request,"page2.html")
def d(request):
    return render(request,"cart.html")
def e(request):
    return render(request,"sucess.html")
def f(request):
    return render(request,"aboutus.html")
def h(request):
    return render(request,"contact.html")
def i(request):
    return render(request,"faq.html")
def j(request):
    return render(request,"service.html")
def k(request):
    return render(request,"privacy.html")
def l(request):
    return render(request,"page2.html")
def checkout_view(request):
    form = CustomerForm()
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/thank-you')  # Make sure /thank-you exists!
    return render(request, "cust.html", {'form': form})

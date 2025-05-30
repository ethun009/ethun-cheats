<template>
  <div class="w-full min-h-screen sm:h-auto sm:p-12 sm:flex sm:items-center sm:justify-center">
    <!-- Full Design -->
    <div
      class="up-container max-w-md overflow-hidden mx-auto p-8 sm:relative sm:bg-white sm:rounded-lg sm:shadow-lg sm:shadow-[#0057d0]/10 sm:min-w-[650px] sm:flex sm:flex-wrap">

      <!-- nav -->
      <div
        class="w-full h-12 shadow-md shadow-[#0057d0]/5 rounded-lg overflow-hidden flex justify-between items-center p-5 bg-white sm:bg-[#fbfcff] sm:shadow-none sm:ring-1 sm:ring-[#0057d0]/10">
        <div class="">
          <NuxtLink to="/payment">
            <svg width="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1Z"
                stroke="#6D7F9A" stroke-width="1.5"></path>
              <path d="M10.7749 12.9L7.3749 9.50002L10.7749 6.10002" stroke="#94A9C7" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
        </div>
        <div class="flex items-center">          
          <button class="cancel-btn" @click="handleCancel">
            <svg width="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13" stroke="#94A9C7" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M1 1L13 13" stroke="#6D7F9A" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>    
          </button>       
        </div>
      </div>
      <!--END nav -->

      <!-- bKash Transaction -->
      <div class="w-full">
        <div class="flex flex-col sm:flex-row flex-wrap sm:mt-5 sm:justify-between sm:items-center">
          <div class="w-full h-20 mb-4 sm:mt-0 flex justify-center items-center">
            <img src="/assets/bkash.png" alt="Logo" class="h-[80%]">
          </div>
          <div
            class="bg-white shadow shadow-[#0057d0]/5 rounded-lg px-5 py-3 sm:h-[85px] flex items-center sm:w-[70%] sm:shadow-none sm:ring-1 sm:ring-[#0057d0]/10">
            <div
              class="w-[55px] h-[55px] p-1.5 flex justify-center items-center mr-4 ring-1 ring-[#0057d0]/10 rounded-full">
              <img src="/assets/logo.png" alt="ETHUN" class="w-[80%]">
            </div>
            <div class="flex flex-col">
              <h3 class="font-semibold text-[#6D7F9A]">ETHUN 009</h3>
            </div>
          </div>
          <div
            class="bg-white shadow shadow-[#0057d0]/5 rounded-lg py-3 px-2 sm:h-[85px] flex flex-col sm:items-center sm:justify-center sm:shadow-none sm:ring-1 sm:ring-[#0057d0]/10 mt-3 sm:w-[25%] sm:mt-0">
            <h1 class="text-xl sm:text-2xl font-semibold text-[#6D7F9A]">৳ <span id="amountDisplay">AMOUNT</span></h1>
          </div>
        </div>

        <form action="" class="actionForm" method="post" accept-charset="utf-8">            
          <!-- Transaction Id -->
          <div class="brand-bg p-5 mt-3 rounded-lg overflow-auto">
            <div class="text-center mt-3">
              <h2 class="mb-3 font-semibold text-white font-bangla">ট্রান্সজেকশন আইডি দিন</h2>
              <input type="text" name="transaction_id" placeholder="ট্রান্সজেকশন আইডি দিন"
                class="font-bangla appearance-none w-full text-[15px] rounded-[10px] sm:bg-[#fbfcff] shadow shadow-[#0057d0]/5 px-5 py-3.5 placeholder-[#94A9C7] focus:outline-none focus:ring-1 focus:ring-[#0057d0]"
                maxlength="10" required>
            </div>

            <!-- Phone Number -->
            <div id="sender_number" class="text-center mt-3">
              <h2 class="mb-3 font-semibold text-white font-bangla">ফোন নম্বর লিখুন</h2>
              <input type="text" name="phone_number" placeholder="ফোন নম্বর লিখুন"
                class="font-bangla appearance-none w-full text-[15px] rounded-[10px] sm:bg-[#fbfcff] shadow shadow-[#0057d0]/5 px-5 py-3.5 placeholder-[#94A9C7] focus:outline-none focus:ring-1 focus:ring-[#0057d0]"
                maxlength="12">
            </div>
            <!-- Phone Number -->

            <div class="">
              <ul class="mt-5 text-slate-200">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla">*247# ডায়াল করে আপনার BKASH মোবাইল মেনুতে যান অথবা BKASH অ্যাপে
                    যান।</p>
                </li>
                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla"> <span class="text-yellow-300 font-semibold ml-1">
                      "Send Money"
                    </span> -এ ক্লিক করুন। </p>
                </li>
                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="sm:w-[90%] font-bangla">প্রাপক নম্বর হিসেবে এই নম্বরটি লিখুনঃ <span
                      class="text-yellow-300 font-semibold ml-1"> 01914553915</span>
                    <a href="#" class="px-2 py-0.5 mx-2 rounded-md inline-block bg-[#00000040] copy"
                      data-clipboard-text="01914553915"><img
                        src="/assets/copy.png"
                        class="w-3 inline mr-2" alt="Copy">Copy</a>
                  </p>
                </li>

                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla">টাকার পরিমাণঃ <span id="amountInstructions" class="text-yellow-300 font-semibold ml-1">
                      Amount</span></p>
                </li>
                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla">নিশ্চিত করতে এখন আপনার BKASH মোবাইল মেনু পিন লিখুন।</p>
                </li>
                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla">সবকিছু ঠিক থাকলে, আপনি BKASH থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।
                  </p>
                </li>
                <hr class="brand-hr my-3">
                <li class="flex text-sm">
                  <div><span class="inline-block w-1.5 h-1.5 mr-2 bg-white rounded-full mb-0.5"></span>
                  </div>
                  <p class="font-bangla">এখন উপরের বক্সে আপনার<span
                      class="text-yellow-300 font-semibold ml-1">Transaction ID</span> দিন এবং
                    নিচের<span class="text-yellow-300 font-semibold ml-1">VERIFY</span> বাটনে ক্লিক
                    করুন।</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- END Transaction Id -->

          <div class="mt-5">
            <button type="submit" id="form_submit"
              class="brand-btn block rounded-[10px] px-4 py-3.5 text-center font-semibold text-white transition-colors w-full">VERIFY</button>
          </div>
        </form>
      </div>
      <!--END bKash Transaction -->
    </div>

    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>
  </div>
</template>

<script setup>
// UI only implementation - no functionality
definePageMeta({
  layout: 'transaction'
});

// Handle cancel button click
function handleCancel() {
  navigateTo('/payment');
}
</script>

<style>
@import '~/assets/css/transaction.css';

/* Custom CSS */
* {
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(350deg, #f4f9ff, #edf4ffc9), url('/assets/body.png');
}

.font-bangla {
  font-family: 'Baloo Da 2', cursive;
}

/* bKash */
.brand-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(207 39 113 / var(--tw-bg-opacity));
}

.brand-hr {
  --tw-border-opacity: 1;
  border-color: rgb(191 24 97 / var(--tw-border-opacity));
}

.brand-btn {
  --tw-bg-opacity: 1;
  background-color: rgb(207 39 113 / var(--tw-bg-opacity));
}

.brand-btn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(231 57 133 / var(--tw-bg-opacity));
}

/* Toast Message */
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.toast {
  background-color: rgb(207 39 113 / 0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  animation: slideIn 0.3s, fadeOut 0.5s 2.5s forwards;
  max-width: 300px;
}

.toast-success {
  background-color: rgba(46, 204, 113, 0.9);
}

.toast-error {
  background-color: rgba(231, 76, 60, 0.9);
}

.toast-icon {
  margin-right: 10px;
  font-size: 20px;
}

.toast-message {
  flex: 1;
  font-weight: 500;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style> 